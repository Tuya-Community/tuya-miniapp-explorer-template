Page({
  startPullDownRefresh() {
    ty.startPullDownRefresh({
      success() {
        ty.showToast({
          title: 'start',
        })
      },
      fail(err) {
        console.log('err', err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
  stopPullDownRefresh() {
    ty.stopPullDownRefresh({
      success() {
        ty.showToast({
          title: 'stop',
        })
      },
    })
  },
})
