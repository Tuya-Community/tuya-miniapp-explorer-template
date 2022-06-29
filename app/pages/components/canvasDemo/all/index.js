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
    var context = ty.createCanvasContext('circle')

    // Fill with gradient

    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */
    let Sp = []
    let Sps = {
      ellipse: {
        x: 180,
        y: 200,
        a: 100,
        b: 140,
        fillStyle: '#2964CC',
        rotate: Math.PI / 2,
        opacity: 1,
        shadow: { blur: 2 },
      },
      polygon: { x: 200, y: 100, r: 40, sides: 7, fillStyle: '#FC354C', rotate: Math.PI / 4 },
      cshape: {
        points: [
          [70, 85],
          [400, 200],
          [204, 46],
          [120, 104],
          [104, 361],
          [104, 46],
          [80, 20],
          [20, 16],
          [20, 40],
          [104, 61],
        ],
        lineWidth: 5,
        fillStyle: '#00A0B0',
        rotate: Math.PI / 7,
        needGra: 'circle',
        smooth: false,
        gra: [
          [0, '#00A0B0'],
          [0.2, '#6A4A3C'],
          [0.4, '#CC333F'],
          [0.6, '#EB6841'],
          [1, '#EDC951'],
        ],
      },
      rect: { x: 150, y: 250, w: 80, h: 80, fillStyle: '#36BBA6' },
      circle: {
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
    }

    let text = new Shape(
      'text',
      { x: 0, y: 50, fontSize: 20, text: '点击,拖拽或者长按任意一个图形', fillStyle: '#D6254D' },
      'fill',
      true
    )
    this.tyCanvas.add(text)

    let keys = Object.keys(Sps)
    for (var i = 0; i < keys.length; i++) {
      Sp[i] = new Shape(keys[i], Sps[keys[i]], 'fill', true)
      this.tyCanvas.add(Sp[i])
      ;(function (i) {
        Sp[i].bind('tap', function () {
          text.updateText('你在点击' + keys[i])
        })

        Sp[i].bind('drag', function () {
          text.updateText('你在拖拽' + keys[i])
        })

        Sp[i].bind('touchstart', function () {
          text.updateText('你开始点击' + keys[i])
        })

        Sp[i].bind('touchmove', function () {
          text.updateText('你在' + keys[i] + '上移动')
        })

        Sp[i].bind('touchend', function () {
          text.updateText('你结束点击' + keys[i])
        })

        Sp[i].bind('longpress', function () {
          text.updateText('你重重的点击了' + keys[i])
        })
      })(i)
    }

    // let polygon = new Shape('polygon', { x: 200, y: 100, r: 40, sides: 3, fillStyle: "#FC354C", rotate: Math.PI / 4 }, 'mix', true)

    // circle.bind('tap', function () {
    //   text.updateText('你点击了有渐变的圆形')
    // })

    // polygon.bind('drag', function () {
    //   text.updateText('你在拖拽polygon')
    // })

    text.bind('tap', function () {
      text.updateText('你玩弄了我')
    })

    text.bind('touchstart', function () {
      text.updateText('你玩弄了我')
    })

    text.bind('drag', function () {
      text.updateText('你在拖拽我')
    })

    text.bind('touchend', function () {
      text.updateText('你结束玩弄我')
    })

    text.bind('longpress', function () {
      text.updateText('你猛烈地玩弄了我')
    })
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
