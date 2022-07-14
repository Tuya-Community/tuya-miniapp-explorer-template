import Render from './index.rjs';
let render;
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    render = new Render(this);
  },

  onReady() {
    render.renderCar();
  },
});