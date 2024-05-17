Page({
  hideHomeButton() {
    ty.hideHomeButton({
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
  }
})
