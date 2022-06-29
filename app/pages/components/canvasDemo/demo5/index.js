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
    /**
     *
     */
    // console.log(requestAnimationFrame);
    var context = ty.createCanvasContext('elliA')

    // Fill with gradient

    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */

    // let ellipse = new Shape('ellipse', { x: 200, y: 200, a: 40, b: 100, fillStyle: "#00A0B0", rotate: Math.PI / 7, shadow:{blur:2}}, 'mix', true)
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
    let text = new Shape(
      'text',
      {
        x: 180,
        y: 200,
        text: 'W',
        fillStyle: '#ffffff',
        fontSize: 40,
        rotate: 0,
        align: 'center',
        textBaseline: 'middle',
      },
      'fill',
      true
    )
    this.tyCanvas.add(ellipse)
    // this.tyCanvas.add(polygon);
    this.tyCanvas.add(text)
    let a = ellipse.clone()
    let b = ellipse.clone()
    let c = ellipse.clone()
    // let d = ellipse.clone();
    // let e = ellipse.clone();
    // let f = ellipse.clone();

    ellipse.destroy()
    this.tyCanvas.add(b)
    this.tyCanvas.add(a)
    this.tyCanvas.add(c)
    this.tyCanvas.add(text)

    b.updateOption({ fillStyle: '#ff65ff', rotate: 0 })
    a.updateOption({ fillStyle: '#29ffff', rotate: 0 })

    a.animate({ rotate: '+=' + Math.PI * 2 }, { duration: 4000, easing: 'linear' }).start(true)
    b.animate({ rotate: '+=' + Math.PI * 2 }, { duration: 5000, easing: 'linear' }).start(true)
    c.animate({ rotate: '+=' + Math.PI * 2 }, { duration: 3000, easing: 'linear' }).start(true)
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
