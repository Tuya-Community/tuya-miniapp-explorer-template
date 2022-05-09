Page({
  data: {
    isPlain: true,
    buttonText: '点击',
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
    console.log('按钮虽然设置了disabled，但是仍触发了tap事件')
  },
  handleDisabledTouchStart() {
    console.log('按钮虽然设置了disabled，但是仍触发了touchstart事件')
  },
})
