Page({
  toast1Tap() {
    ty.showToast({
      title: '默认'
    })
  },

  toast2Tap() {
    ty.showToast({
      title: 'duration 3000',
      duration: 3000
    })
  },

  toast3Tap() {
    ty.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    })
  },

  hideToast() {
    ty.hideToast()
  }
})
