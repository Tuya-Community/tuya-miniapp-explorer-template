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
    // console.log(e);
    this.tyCanvas.touchmoveDetect(e)
  },
  bindtouchend: function () {
    //检测手指点击 移出事件
    this.tyCanvas.touchendDetect()
  },
  bindtap: function (e) {
    // console.log(e);
    this.tyCanvas.tapDetect(e)
  },
  bindlongpress: function (e) {
    // console.log(e);
    this.tyCanvas.longpressDetect(e)
  },
  onLoad: function () {
    /**
     *
     */
    // console.log(requestAnimationFrame);
    var context = ty.createCanvasContext('ellipse')

    // Fill with gradient

    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */

    // let rect = new Shape('rect', { x: 60, y: 60, w: 40, h: 40, opacity: 0.3, fillStyle: "#2FB8AC", rotate: 0, needShadow: true, shadow: { color: "#cccccc" },needGra: 'line', gra: [[0, '#00A0B0'], [0.2, '#6A4A3C'], [0.4, '#CC333F'], [0.6, '#EB6841'], [1, '#EDC951']] }, 'mix', true)

    let ellipse = new Shape(
      'ellipse',
      {
        x: 180,
        y: 200,
        a: 100,
        b: 140,
        fillStyle: '#2964CC',
        rotate: Math.PI / 2,
        opacity: 1,
        shadow: { blur: 2 },
      },
      'fill',
      true
    )
    this.tyCanvas.add(ellipse)

    let a = ellipse.clone()
    let b = ellipse.clone()
    let c = ellipse.clone()

    ellipse.destroy()
    this.tyCanvas.add(b)
    this.tyCanvas.add(a)
    this.tyCanvas.add(c)
    // this.tyCanvas.add(text);

    b.updateOption({ fillStyle: '#ff65ff', rotate: Math.PI / 4, y: 80 })
    a.updateOption({ fillStyle: '#29ffff', rotate: Math.PI, y: 340, a: 10 })
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
