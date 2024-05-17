Page({
  data: {
    json: '',
  },
  getSystemSetting() {
    const self = this
    ty.getSystemSetting({
      success: function (res) {
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
})
