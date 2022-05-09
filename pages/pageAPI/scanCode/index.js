Page({
  data: {
    result: ''
  },

  scanCode() {
    const that = this
    ty.scanCode({
      success(res) {
        console.log(`scanCode ===== success `, res)
        that.setData({
          result: res.result
        })
      },
      fail(res) {
        console.log(`scanCode ===== success `, res)
      }
    })
  }
})
