Page({
  data: {
    propagation: false,
  },
  handlePropagation() {
    const { propagation } = this.data
    this.setData({
      propagation: !propagation,
    })
  },
})
