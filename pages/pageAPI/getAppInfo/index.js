Page({
  data: {
    json: '',
  },
  getAppInfo() {
    const self = this
    ty.getAppInfo({
      success: function (res) {
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
})
