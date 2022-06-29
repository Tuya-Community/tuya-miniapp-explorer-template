const app = getApp()

let listData = [
  {
    dragId: 'item0',
    fixed: false,
  },
  {
    dragId: 'item1',
    fixed: false,
  },
  {
    dragId: 'item2',
    fixed: false,
  },
  {
    dragId: 'item3',
    fixed: false,
  },
  {
    dragId: 'item4',
    fixed: false,
  },
  {
    dragId: 'item5',
    fixed: false,
  },
  {
    dragId: 'item6',
    fixed: false,
  },
  {
    dragId: 'item7',
    fixed: false,
  },
  {
    dragId: 'item8',
    fixed: false,
  },
  {
    dragId: 'item9',
    fixed: false,
  },
]

Page({
  data: {
    isIphoneX: app.globalData.isIphoneX,
    size: 1,
    listData: listData,
    extraNodes: [
      {
        type: 'destBefore',
        dragId: 'destBefore0',
        destKey: 0,
        slot: 'before',
        fixed: true,
      },
      {
        type: 'destAfter',
        dragId: 'destAfter0',
        destKey: 0,
        slot: 'after',
        fixed: true,
      },
      {
        type: 'after',
        dragId: 'plus',
        slot: 'plus',
        fixed: true,
      },
    ],
    pageMetaScrollTop: 0,
    scrollTop: 0,
  },
  sortEnd(e) {
    console.log('sortEnd', e.detail.listData)
    this.setData({
      listData: e.detail.listData,
    })
  },
  change(e) {
    console.log('change', e.detail.listData)
  },
  sizeChange(e) {
    this.setData({
      size: e.detail.value,
    })
    this.drag.columnChange()
  },
  itemClick(e) {
    console.log(e)
  },
  toggleFixed(e) {
    let key = e.currentTarget.dataset.key

    let { listData } = this.data

    listData[key].fixed = !listData[key].fixed

    this.setData({
      listData: listData,
    })
  },
  add(e) {
    let listData = this.data.listData
    listData.push({
      dragId: `item${listData.length}`,
      fixed: false,
    })
    setTimeout(() => {
      this.setData({
        listData,
      })
      this.drag.init()
    }, 300)
  },
  // scroll(e) {
  //   this.setData({
  //     pageMetaScrollTop: e.detail.scrollTop,
  //   })
  // },
  // // 页面滚动
  // onPageScroll(e) {
  //   this.setData({
  //     scrollTop: e.scrollTop,
  //   })
  // },
  onReady() {
    this.drag = this.selectComponent('#drag')
    // 模仿异步加载数据
    setTimeout(() => {
      this.drag.init()
    }, 100)
  },
})
