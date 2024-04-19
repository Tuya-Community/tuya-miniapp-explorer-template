Page({
  data: {
    json: '',
  },
  onLoad() {
    ty.onGetWifiList(this.setWifiList)
  },
  onUnload() {
    ty.offGetWifiList(this.setWifiList)
  },
  setWifiList(list) {
    this.setData({
      json: '<pre style="overflow: auto">' + JSON.stringify(list, null, 4) + '</pre>',
    })
  },
  getWifiList() {
    ty.getWifiList()
  },
})
