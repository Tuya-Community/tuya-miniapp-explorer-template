Page({
  data: {
    json: '',
  },
  getMenuButtonBoundingClientRect() {
    const self = this
    ty.getMenuButtonBoundingClientRect({
      success: function (res) {
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
  getMenuButtonBoundingClientRectSync() {
    let res = ty.getMenuButtonBoundingClientRectSync()
    this.setData({
      json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
    })
  },
})
