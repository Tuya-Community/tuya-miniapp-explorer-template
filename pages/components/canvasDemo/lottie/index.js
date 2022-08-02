import Render from './index.rjs'
let render
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    render = new Render(this)
  },
  animationPlay: function (arg1, arg2) {
    console.log('绘制动画', arg1, arg2)
  },
  onReady() {
    render.renderLottie()
  },
  stop() {
    render.stop()
  },
  play() {
    render.play()
  },
})
