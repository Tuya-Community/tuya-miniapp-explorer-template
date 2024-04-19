Page({
  data: {
    json: '',
  },
  getUserInfo() {
    const self = this
    ty.getUserInfo({
      success: function (res) {
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
})
