Page({
  onUnload() {
    ty.hideNavigationBarLoading()
  },
  showNavigationBarLoading() {
    ty.showNavigationBarLoading({
      complete: function () {
        console.log('showNavigationBarLoading')
      },
    })
  },
  hideNavigationBarLoading() {
    ty.hideNavigationBarLoading()
  },
  setNavigationBarTitle() {
    ty.setNavigationBarTitle({
      title: '测试测试',
    })
  },
  setNavigationBarColor() {
    ty.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 2,
        timingFunc: 'easeIn',
      },
    })
  },
})
