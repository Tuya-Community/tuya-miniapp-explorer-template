Page({
  data: {
    isPlain: true,
    count: 1,
  },
  handleFirstBtnTap() {
    this.setData({
      count: ++this.data.count,
    })
  },
  onLoad() {
    setTimeout(() => {
      this.setData()
    }, 400)

    setTimeout(() => {
      this.setData()
    }, 6000)
  },
  handleDisabledTap() {
    console.log(i18n.t('button_disable_tap'))
  },
  handleDisabledTouchStart() {
    console.log(i18n.t('button_disable_tap'))
  },
})
