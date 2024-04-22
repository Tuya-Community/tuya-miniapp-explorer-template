Page({
  data: {
    json: '',
  },
  getLangContent() {
    const self = this
    ty.getLangContent({
      success: function (res) {
        console.log('success:', res)
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
  getLangKey() {
    const self = this
    ty.getLangKey({
      success: function (res) {
        console.log('getLangKey success:', res)
        self.setData({
          json: '<pre style="overflow: auto">' + JSON.stringify(res, null, 4) + '</pre>',
        })
      },
    })
  },
})
