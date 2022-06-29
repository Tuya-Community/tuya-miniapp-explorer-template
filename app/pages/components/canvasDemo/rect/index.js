import { tyDraw, Shape } from '@tuya-miniapp/miniapp-canvas'

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    tyCanvas: null,
  },
  //事件处理函数
  bindViewTap: function () {
    ty.navigateTo({
      url: '../logs/logs',
    })
  },
  bindtouchstart: function (e) {
    // 检测手指点击事件
    // console.log(e);
    this.tyCanvas.touchstartDetect(e)
  },
  bindtouchmove: function (e) {
    // 检测手指点击 之后的移动事件
    this.tyCanvas.touchmoveDetect(e)
  },
  bindtouchend: function () {
    //检测手指点击 移出事件
    this.tyCanvas.touchendDetect()
  },
  bindtap: function (e) {
    this.tyCanvas.tapDetect(e)
  },
  bindlongpress: function (e) {
    // console.log(e);
    this.tyCanvas.longpressDetect(e)
  },
  onLoad: function () {
    var context = ty.createCanvasContext('rect')

    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)
    // console.log(this.tyCanvas)

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */

    var rect = new Shape(
      'rect',
      { x: 150, y: 250, w: 80, h: 80, fillStyle: '#36BBA6' },
      'fill',
      true
    )
    this.tyCanvas.add(rect)
    // rect.setOrigin([40,40]);
    rect.updateOption({ rotate: Math.PI / 4 })
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
