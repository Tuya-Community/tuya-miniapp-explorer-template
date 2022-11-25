Page({
  data: {
    count: 0,
  },
  onReady: function () {
    ty.onError(function () {
      console.error('onReady, ty.onerror')
    })
    throw new Error('view onerror')
  },
  handleFatherTap: function (e) {
    console.log('handleFatherTap', e)
  },
  handleTap: function (e) {
    console.log('handleTap', e)
    this.setData({
      count: this.data.count === 100 ? 200 : 100,
    })
  },
  onPullDownRefresh() {
    console.log('demo onPullDownRefresh triggered')
  },
})
