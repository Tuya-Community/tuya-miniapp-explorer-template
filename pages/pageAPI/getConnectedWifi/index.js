Page({
  data: {
    json: '',
  },
  getConnectedWifi() {
    const self = this
    ty.getConnectedWifi({
      success: function (res) {
        console.log('success:', res)
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
})
