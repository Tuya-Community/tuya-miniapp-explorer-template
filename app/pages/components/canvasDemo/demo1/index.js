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
    var context = ty.createCanvasContext('circleA')

    // Fill with gradient

    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */

    let c = []
    let circle = new Shape(
      'circle',
      {
        x: 160,
        y: 160,
        r: 40,
        sA: 0,
        fillStyle: '#C0D860',
        strokeStyle: '#CC333F',
        rotate: 10,
        lineWidth: 0,
        needGra: 'line',
        gra: [
          [0, '#00A0B0'],
          [0.2, '#6A4A3C'],
          [0.4, '#CC333F'],
          [0.6, '#EB6841'],
          [1, '#EDC951'],
        ],
      },
      'fill',
      true
    )
    let circle1 = new Shape(
      'circle',
      {
        x: 160,
        y: 270,
        r: 40,
        sA: Math.PI / 2,
        fillStyle: '#C0D860',
        strokeStyle: '#CC333F',
        rotate: 20,
        lineWidth: 0,
        needGra: 'circle',
        gra: [
          [0, '#00A0B0'],
          [0.2, '#6A4A3C'],
          [0.4, '#CC333F'],
          [0.6, '#EB6841'],
          [1, '#EDC951'],
        ],
      },
      'fill',
      true
    )
    let circle2 = new Shape(
      'circle',
      {
        x: 160,
        y: 360,
        r: 40,
        sA: Math.PI,
        fillStyle: '#FF6600',
        strokeStyle: '#CC333F',
        rotate: 30,
        lineWidth: 0,
      },
      'fill',
      true
    )
    let circle3 = new Shape(
      'circle',
      {
        x: 160,
        y: 360,
        r: 40,
        sA: Math.PI,
        fillStyle: '#FF6600',
        strokeStyle: '#CC333F',
        rotate: 30,
        lineWidth: 0,
      },
      'fill',
      true
    )
    let circle4 = new Shape(
      'circle',
      {
        x: 160,
        y: 360,
        r: 40,
        sA: Math.PI,
        fillStyle: '#FF6600',
        strokeStyle: '#CC333F',
        rotate: 30,
        lineWidth: 0,
      },
      'fill',
      true
    )
    let circle5 = new Shape(
      'circle',
      {
        x: 160,
        y: 360,
        r: 40,
        sA: Math.PI,
        fillStyle: '#FF6600',
        strokeStyle: '#CC333F',
        rotate: 30,
        lineWidth: 0,
      },
      'fill',
      true
    )
    let circle6 = new Shape(
      'circle',
      {
        x: 160,
        y: 360,
        r: 40,
        sA: Math.PI,
        fillStyle: '#FF6600',
        strokeStyle: '#CC333F',
        rotate: 30,
        lineWidth: 0,
      },
      'fill',
      true
    )

    for (var i = 0; i < 20; i++) {
      c[i] = new Shape('circle', { x: 100 + i * 10, y: 160, r: 4 }, 'fill', true)
      this.tyCanvas.add(c[i])

      c[i]
        .animate('y', '+=100', { duration: 1000 + i * 50 })
        .animate('y', '-=100', { duration: 1000 + i * 50 })
        .start(true)
    }
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
