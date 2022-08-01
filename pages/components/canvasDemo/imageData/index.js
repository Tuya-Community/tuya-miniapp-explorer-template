import Render from './index.rjs'
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.render = new Render(this)
  },

  onReady() {
    this.render.renderImageData()
    this.render.renderPath2D()
  },
})
