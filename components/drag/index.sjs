var isOutRange = function (x1, y1, x2, y2, x3, y3) {
  return x1 < 0 || x1 >= y1 || x2 < 0 || x2 >= y2 || x3 < 0 || x3 >= y3
}

var sortCore = function (sKey, eKey, st) {
  var _ = st.baseData

  var excludeFix = function (cKey, type) {
    if (st.list[cKey].fixed) {
      // fixed 元素位置不会变化, 这里直接用 cKey(sortKey) 获取, 更加快捷
      type ? --cKey : ++cKey
      return excludeFix(cKey, type)
    }
    return cKey
  }

  // 先获取到 endKey 对应的 realKey, 防止下面排序过程中该 realKey 被修改
  var endRealKey = -1
  st.list.forEach(function (item) {
    if (item.sortKey === eKey) endRealKey = item.realKey
  })

  return st.list.map(function (item) {
    if (item.fixed) return item
    var cKey = item.sortKey
    var rKey = item.realKey

    if (sKey < eKey) {
      // 正序拖动
      if (cKey > sKey && cKey <= eKey) {
        --rKey
        cKey = excludeFix(--cKey, true)
      } else if (cKey === sKey) {
        rKey = endRealKey
        cKey = eKey
      }
    } else if (sKey > eKey) {
      // 倒序拖动
      if (cKey >= eKey && cKey < sKey) {
        ++rKey
        cKey = excludeFix(++cKey, false)
      } else if (cKey === sKey) {
        rKey = endRealKey
        cKey = eKey
      }
    }

    if (item.sortKey !== cKey) {
      item.tranX = (cKey % _.columns) * 100 + '%'
      item.tranY = Math.floor(cKey / _.columns) * 100 + '%'
      item.sortKey = cKey
      item.realKey = rKey
    }
    return item
  })
}

var triggerCustomEvent = function (list, type, ins) {
  var _list = [],
    listData = []

  list.forEach(function (item) {
    _list[item.sortKey] = item
  })

  _list.forEach(function (item) {
    if (!item.extraNode) {
      listData.push(item.data)
    }
  })
  ins.triggerEvent(type, { listData: listData })
}

var touchStart = function (event, ownerInstance) {
  var ins = event.instance
  var st = ownerInstance.getState()
  var _ = st.baseData

  var sTouch = event.changedTouches[0]
  if (!sTouch) return

  st.cur = ins.getDataset().index

  // 初始项是固定项则返回
  var item = st.list[st.cur]
  if (item && item.fixed) return

  // 如果已经在 drag 中则返回, 防止多指触发 drag 动作, touchstart 事件中有效果
  if (st.dragging) return
  st.dragging = true
  ownerInstance.callMethod('drag', { dragging: true })

  // 计算X,Y轴初始位移, 使 item 中心移动到点击处, 单列时候X轴初始不做位移
  st.tranX = _.columns === 1 ? 0 : sTouch.pageX - (_.itemWidth / 2 + _.wrapLeft)
  st.tranY = sTouch.pageY - (_.itemHeight / 2 + _.wrapTop)
  st.sId = sTouch.identifier

  ins.setStyle({
    transform: 'translate3d(' + st.tranX + 'px, ' + st.tranY + 'px, 0)',
  })

  st.itemsInstance.forEach(function (item, index) {
    item.removeClass('tran')
    item.removeClass('cur')
    item.addClass(index === st.cur ? 'cur' : 'tran')
  })

  ownerInstance.callMethod('vibrate')
}

var touchMove = function (event, ownerInstance) {
  var ins = event.instance
  var st = ownerInstance.getState()
  var _ = st.baseData

  var mTouch = event.changedTouches[0]
  if (!mTouch) return

  if (!st.dragging) return

  // 如果不是同一个触发点则返回
  if (st.sId !== mTouch.identifier) return

  // 计算X,Y轴位移, 单列时候X轴初始不做位移
  var tranX = _.columns === 1 ? 0 : mTouch.pageX - (_.itemWidth / 2 + _.wrapLeft)
  var tranY = mTouch.pageY - (_.itemHeight / 2 + _.wrapTop)

  // 到顶到底自动滑动
  if (mTouch.clientY > _.windowHeight - _.itemHeight - _.realBottomSize) {
    // 当前触摸点pageY + item高度 - (屏幕高度 - 底部固定区域高度)
    ownerInstance.callMethod('pageScroll', {
      scrollTop: mTouch.pageY + _.itemHeight - (_.windowHeight - _.realBottomSize),
    })
  } else if (mTouch.clientY < _.itemHeight + _.realTopSize) {
    // 当前触摸点pageY - item高度 - 顶部固定区域高度
    ownerInstance.callMethod('pageScroll', {
      scrollTop: mTouch.pageY - _.itemHeight - _.realTopSize,
    })
  }

  // 设置当前激活元素偏移量
  ins.setStyle({
    transform: 'translate3d(' + tranX + 'px, ' + tranY + 'px, 0)',
  })

  var startKey = st.list[st.cur].sortKey
  var curX = Math.round(tranX / _.itemWidth)
  var curY = Math.round(tranY / _.itemHeight)
  var endKey = curX + _.columns * curY

  // 目标项是固定项则返回
  var item = st.list[endKey]
  if (item && item.fixed) return

  // X轴或Y轴超出范围则返回
  if (isOutRange(curX, _.columns, curY, _.rows, endKey, st.list.length)) return

  // 防止拖拽过程中发生乱序问题
  if (startKey === endKey || startKey === st.preStartKey) return
  st.preStartKey = startKey

  var list = sortCore(startKey, endKey, st)
  st.itemsInstance.forEach(function (itemIns, index) {
    var item = list[index]
    if (index !== st.cur) {
      itemIns.setStyle({
        transform: 'translate3d(' + item.tranX + ',' + item.tranY + ', 0)',
      })
    }
  })

  ownerInstance.callMethod('vibrate')
  ownerInstance.callMethod('listChange', { list: list })
  triggerCustomEvent(list, 'change', ownerInstance)
}

var touchEnd = function (event, ownerInstance) {
  var ins = event.instance
  var st = ownerInstance.getState()

  if (!st.dragging) return
  triggerCustomEvent(st.list, 'sortend', ownerInstance)

  ins.addClass('tran')
  ins.setStyle({
    transform: 'translate3d(' + st.list[st.cur].tranX + ',' + st.list[st.cur].tranY + ', 0)',
  })

  st.preStartKey = -1
  st.dragging = false
  st.cur = -1
  st.tranX = 0
  st.tranY = 0
}

var baseDataObserver = function (newVal, oldVal, ownerInstance, ins) {
  var st = ownerInstance.getState()
  st.baseData = newVal
}

var listObserver = function (newVal, oldVal, ownerInstance, ins) {
  setTimeout(() => {
    var st = ownerInstance.getState()
    st.itemsInstance = ownerInstance.selectAllComponents('.item')

    st.list = newVal || []

    st.list.forEach(function (item, index) {
      var itemIns = st.itemsInstance[index]
      if (item && itemIns) {
        itemIns.setStyle({
          transform: 'translate3d(' + item.tranX + ',' + item.tranY + ', 0)',
        })
        if (item.fixed) itemIns.addClass('fixed')
      }
    })
  }, 100)
}

module.exports = {
  touchStart: touchStart,
  touchMove: touchMove,
  touchEnd: touchEnd,
  baseDataObserver: baseDataObserver,
  listObserver: listObserver,
}
