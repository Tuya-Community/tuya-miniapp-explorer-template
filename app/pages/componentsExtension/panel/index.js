Page({
  data: {
    show: false,
  },
  showToptips() {
    this.setData(
      {
        show: true,
      },
      () => {
        setTimeout(() => {
          this.setData({
            show: false,
          })
        }, 2000)
      }
    )
  },
})
