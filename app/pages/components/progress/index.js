Page({
  data: {
    changeablePercent: 30,
  },
  onShow: function () {
    try {
      setTimeout(() => {
        this.setData({
          changeablePercent: 50,
        })
      }, 5000)
    } catch (error) {}
  },
  handleActiveEnd(ev) {
    console.log(ev.currentTarget.dataset.info)
  },
})
