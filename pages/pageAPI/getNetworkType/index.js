Page({
  data: {
    hasNetworkType: false,
    networkType: '',
  },
  onLoad() {
    ty.onNetworkStatusChange((res) => {
      console.log(`onNetworkStatusChange`, res)
    })
  },
  getNetworkType() {
    const that = this
    try {
      ty.getNetworkType({
        success(res) {
          that.setData({
            hasNetworkType: true,
            networkType: res.networkType,
          })
        },
      })
    } catch(err) {
      console.log(`object`, err.toString())
    }
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: '',
    })
  },
})
