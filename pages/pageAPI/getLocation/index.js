Page({
  data: {
    json: '',
  },
  getLocation() {
    const self = this
    ty.map.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        self.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
})
