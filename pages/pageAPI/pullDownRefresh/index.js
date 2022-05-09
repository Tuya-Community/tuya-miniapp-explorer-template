Page({
  data: {
    count: 0,
  },
  onShow: function () {
    ty.startPullDownRefresh({
      success: function() {
        console.log('demo startPullDownRefresh success')
      },
      fail: function() {
        console.log('demo startPullDownRefresh fail')
      },
      complete: function() {
        console.log('demo startPullDownRefresh complete')
      }
    })
  },
  stopPullDownRefresh: function () {
    ty.stopPullDownRefresh()
    console.log('demo stopPullDownRefresh', new Date())
  },
  onPullDownRefresh: function () {
    console.log('demo onPullDownRefresh', new Date())
    const count = this.data.count + 1
    this.setData({ count })
  }
})
