Page({
  showMenuButton() {
    ty.showMenuButton({
      success: function (res) {
        ty.showToast({
          title: 'show success',
        })
      },
    })
  },
  hideMenuButton() {
    ty.hideMenuButton({
      success: function (res) {
        ty.showToast({
          title: 'hide success',
        })
      },
    })
  },
})
