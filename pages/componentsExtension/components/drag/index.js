Component({
  externalClasses: ['item-wrap-class'],
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },
  properties: {
    extraNodes: {
      // 额外节点
      type: Array,
      value: [],
    },
    listData: {
      // 数据源
      type: Array,
      value: [],
    },
    columns: {
      // 列数
      type: Number,
      value: 1,
    },
    topSize: {
      // 顶部固定高度
      type: Number,
      value: 0,
    },
    bottomSize: {
      // 底部固定高度
      type: Number,
      value: 0,
    },
    itemHeight: {
      // 每个 item 高度, 用于计算 item-wrap 高度
      type: Number,
      value: 0,
    },
    scrollTop: {
      // 页面滚动高度
      type: Number,
      value: 0,
    },
  },
  data: {
    /* 未渲染数据 */
    baseData: {},
    pageMetaSupport: true, // 当前版本是否支持 page-meta 标签
    platform: '', // 平台信息
    listWxs: [], // wxs 传回的最新 list 数据
    rows: 0, // 行数

    /* 渲染数据 */
    wrapStyle: '', // item-wrap 样式
    list: [], // 渲染数据列
    dragging: false,
  },
  methods: {
    vibrate() {
      if (this.data.platform !== 'devtools') ty.vibrateShort()
    },
    pageScroll(e) {
      this.triggerEvent('scroll', {
        scrollTop: e.scrollTop,
      })
    },
    listChange(e) {
      this.data.listWxs = e.list
    },
    itemClick(e) {
      let index = e.currentTarget.dataset.index
      let item = this.data.listWxs[index]

      this.triggerEvent('click', {
        key: item.realKey,
        data: item.data,
        extra: e.detail,
      })
    },
    /**
     *  初始化获取 dom 信息
     */
    initDom() {
      let { windowWidth, windowHeight, platform, SDKVersion } = ty.getSystemInfoSync()
      let remScale = (windowWidth || 375) / 375

      // this.data.pageMetaSupport = compareVersion(SDKVersion, '2.9.0') >= 0
      this.data.platform = platform

      let baseData = {}
      baseData.windowHeight = windowHeight
      baseData.realTopSize = (this.data.topSize * remScale) / 2
      baseData.realBottomSize = (this.data.bottomSize * remScale) / 2
      baseData.columns = this.data.columns
      baseData.rows = this.data.rows

      const query = this.createSelectorQuery()

      // todo
      query.select('.item').boundingClientRect()
      query.select('.item-wrap').boundingClientRect()
      query.exec((res) => {
        baseData.itemWidth = res[0].width
        baseData.itemHeight = res[0].height
        baseData.wrapLeft = res[1].left
        baseData.wrapTop = res[1].top + this.data.scrollTop

        this.setData({
          dragging: false,
          baseData,
        })
      })
    },
    /**
     * column 改变时候需要清空 list, 以防页面溢出
     */
    columnChange() {
      this.setData({
        list: [],
      })
      this.init()
    },
    /**
     *  初始化函数
     *  {listData, topSize, bottomSize, itemHeight} 参数改变需要手动调用初始化方法
     */
    init() {
      // 初始必须为true以绑定wxs中的函数,

      this.setData({ dragging: true })

      let delItem = (item, extraNode) => ({
        id: item.dragId,
        extraNode: extraNode,
        fixed: item.fixed,
        slot: item.slot,
        data: item,
      })

      let { listData } = this.data
      let _list = []

      // 遍历数据源增加扩展项, 以用作排序使用
      listData.forEach((item, index) => {
        _list.push(delItem(item, false))
      })

      let i = 0,
        columns = this.data.columns
      let list = _list.map((item, index) => {
        item.realKey = item.extraNode ? -1 : i++ // 真实顺序
        item.sortKey = index // 整体顺序
        item.tranX = `${(item.sortKey % columns) * 100}%`
        item.tranY = `${Math.floor(item.sortKey / columns) * 100}%`
        return item
      })

      this.data.rows = Math.ceil(list.length / columns)

      this.setData({
        list,
        listWxs: list,
        wrapStyle: `height: ${this.data.rows * this.data.itemHeight}rpx`,
      })
      if (list.length === 0) return

      // 异步加载数据时候, 延迟执行 initDom 方法, 防止基础库 2.7.1 版本及以下无法正确获取 dom 信息
      setTimeout(() => this.initDom(), 0)
    },
  },
  ready() {
    this.init()
  },
})
