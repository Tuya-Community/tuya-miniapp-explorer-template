Page({
  showLoading() {
    ty.showLoading({
      title: '加载中',
    })
  },
  showLoading2() {
    ty.showLoading({
      title: '',
      mask: true,
      success() {
        setTimeout(() => {
          ty.hideLoading()
        }, 3000)
      },
    })
  },
  hideLoading() {
    ty.hideLoading({
      title: '',
      mask: true,
    })
  },
})
