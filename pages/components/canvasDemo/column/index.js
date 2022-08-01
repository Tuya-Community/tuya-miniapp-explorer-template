import Render from './index.rjs'
let render
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    render = new Render(this)
  },

  onReady() {
    this.draw()
  },

  draw() {
    render.draw([
      { genre: 'Sports', sold: Math.floor(Math.random() * 500) },
      { genre: 'Strategy', sold: Math.floor(Math.random() * 500) },
      { genre: 'Action', sold: Math.floor(Math.random() * 500) },
      { genre: 'Shooter', sold: Math.floor(Math.random() * 500) },
      { genre: 'Other', sold: Math.floor(Math.random() * 500) },
    ])
  },
})
