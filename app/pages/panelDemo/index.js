Page({
  data: {
    showContainer: false,
    isOpen: true,
    spinSpeed: 1, // 0~100
    spinDuration: '2s', // 动画时间
    tempspinSpeed: 1,
    isRock: false,
    rockRotate: ['30', '60', '90'],
    rockRotateIndex: 0,
  },
  onPullDownRefresh() {
    console.log('mothra onPullDownRefresh')
    setTimeout(() => {
      ty.stopPullDownRefresh()
    }, 5000)
  },
  onReachBottom() {
    console.log('mothra onReactBottom')
  },
  togglePan: function () {
    this.setData({
      isOpen: !this.data.isOpen,
    })
  },
  checkRockBtn: function (e) {
    this.setData({
      rockRotateIndex: e.currentTarget.dataset.index,
    })
  },
  toggleContainer: function () {
    // 如果是展示弹窗，就将真是数据放入缓存
    if (!this.data.showContainer) {
      this.setData({
        tempspinSpeed: this.data.spinSpeed,
      })
    }
    this.setData({
      showContainer: !this.data.showContainer,
    })
  },
  confirmContainer: function () {
    this.setData({
      spinSpeed: this.data.tempspinSpeed,
      spinDuration: 2 - ((2 - 0.2) / 100) * this.data.tempspinSpeed + 's',
    })
    this.toggleContainer()
  },
  handleChangeSlider: function (e) {
    this.setData({
      tempspinSpeed: e.detail.value,
    })
  },
})
