Page({
  showStatusBar() {
    ty.showStatusBar({
      success: function () {
        ty.showToast({
          title: 'success',
        })
      },
      fail: function () {
        ty.showToast({
          title: 'fail',
        })
      },
    })
  },
  hideStatusBar() {
    ty.hideStatusBar({
      success: function () {
        ty.showToast({
          title: 'success',
        })
      },
      fail: function () {
        ty.showToast({
          title: 'fail',
        })
      },
    })
  },
})
