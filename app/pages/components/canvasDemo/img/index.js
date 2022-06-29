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
    this.tyCanvas = new tyDraw(context, 0, 0, 400, 500)

    // var path ="";
    // wx.getImageInfo({
    //   src: "./1.png",
    //   success: function (res) {
    // ctx.drawImage('./1.jpg', 0, 0, 158, 104)
    // path = res.path;
    //   },
    //   fail: function (e) {
    //     console.log(e);
    //   }
    // })

    // Fill with gradient

    // this.tyCanvas = new tyDraw(context,0,0,400,500);

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 tyDraw初始化的时候 需要设置 以便点击检测的时候使用
     */

    const imgUrl = '/assets/images/cat.png'
    // const imgUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkZDMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTglIiBzdG9wLWNvbG9yPSIjQzNGRjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjM0JSIgc3RvcC1jb2xvcj0iIzM5RERGQyIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI1MSUiIHN0b3AtY29sb3I9IiM2MzgyRkMiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNjclIiBzdG9wLWNvbG9yPSIjRkYzRkQ1IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgyJSIgc3RvcC1jb2xvcj0iI0ZFNDkxRiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZCOTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQxIiB4MT0iMCUiIHgyPSIwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIyNCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC45Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZ3JhZGllbnQxKSIvPjwvc3ZnPg==';
    // const imgUrl = 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'

    let img = new Shape('image', { x: 100, y: 300, w: 100, h: 100, file: imgUrl }, 'fill', true)

    // wx.chooseImage({
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
    this.tyCanvas.add(img)
    // circle2.setOrigin([100,10]);
    img.animate({ x: '+100', w: 1000, h: 1000, rotate: Math.PI / 2 }, { duration: 5000 }).start(10)
    // circle2.updateOption(
    //   { rotate:-Math.PI/4}
    // );
    // circle2.bind('tap',function(){
    //   // console.log('aaaa')
    // })
  },
  onUnload: function () {
    this.tyCanvas.clear() //推荐这个
  },
})
