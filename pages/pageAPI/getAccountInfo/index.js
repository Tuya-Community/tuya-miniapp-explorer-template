Page({
  data: {
    json: '',
  },
  getAccountInfo() {
    const self = this
    ty.getAccountInfo({
      success: function (res) {
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
      fail: function (err) {
        console.log('fail:', err)
        ty.showToast({
          title: 'getAccountInfo fail',
        })
      },
    })
  },
  getAccountInfoSync() {
    let accountInfo = ty.getAccountInfoSync()
    console.log('accountInfo', accountInfo)
    this.setData({
      json: '<pre style="overflow: auto">' + JSON.stringify(accountInfo, null, 4) + '</pre>',
    })
  },
})
