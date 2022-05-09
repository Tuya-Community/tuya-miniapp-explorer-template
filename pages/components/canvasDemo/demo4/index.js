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
    var context = ty.createCanvasContext('pacMan')

    // Fill with gradient

    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */

    let back = new Shape(
      'rect',
      { x: 200, y: 200, w: 1000, h: 1000, fillStyle: '#000000' },
      'fill',
      false
    )
    let man = new Shape('circle', {
      x: 200,
      y: 200,
      r: 60,
      fillStyle: '#FDCA49',
      rotate: Math.PI / 2,
    })
    let manEye = new Shape('circle', {
      x: 200,
      y: 180,
      r: 4,
      fillStyle: '#ffffff',
      rotate: Math.PI / 2,
    })
    let r = []

    this.tyCanvas.add(back)

    for (var i = 0; i < 7; i++) {
      r[i] = new Shape('circle', {
        x: 200 + i * 15,
        y: 200,
        r: 5,
        fillStyle: '#ffffff',
        rotate: Math.PI / 2,
      })
      this.tyCanvas.add(r[i])
      ;(function (i) {
        r[i]
          .animate(
            { x: 200, opacity: 0 },
            {
              duration: i * 300,
              onEnd: function () {
                beanAni(i)
              },
            }
          )
          .start()
      })(i)
    }

    function beanAni(i) {
      r[i].updateOption({ x: 290, opacity: 1 })
      r[i]
        .animate(
          { x: 200, opacity: 0 },
          {
            duration: 1800,
            onEnd: function () {
              beanAni(i)
            },
          }
        )
        .start()
    }

    this.tyCanvas.add(man)
    this.tyCanvas.add(manEye)
    man
      .animate({ sA: Math.PI / 6, eA: (11 * Math.PI) / 6 }, { duration: 500 })
      .animate({ sA: 0, eA: 2 * Math.PI }, { duration: 500 })
      .start(true)
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
