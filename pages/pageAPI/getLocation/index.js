Page({
  data: {
    longitude: '未获取',
    latitude: '未获取'
  },
  getLocation() {
    const that = this
    ty.getLocation({
      type: 'wgs84',
      altitude: true,
      complete: function(res) {
        console.log(`getLocation ======== complete`, res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  }
})
