Page({
  data: {
    screenBrightness: 0
  },

  onLoad() {
    this._updateScreenBrightness()
  },

  changeBrightness(e) {
    const value = parseFloat(e.detail.value).toFixed(1)
    this.setData({
      screenBrightness: value
    })
    ty.setScreenBrightness({
      value,
      success: function(res) {
        console.log(`setScreenBrightness ========= success`, res)
      },
      fail: function(res) {
        console.log(`setScreenBrightness ========= fail`, res)
      }
    })
  },

  _updateScreenBrightness() {
    const self = this
    // console.log(`_updateScreenBrightness`)
    ty.getScreenBrightness({
      success: function(res) {
        console.log(`getScreenBrightness ========= success`, res)
        self.setData({
          screenBrightness: Number.parseFloat(
            res.value.toFixed(1)
          )
        })
      },
      fail: function(res) {
        console.log(`getScreenBrightness ========= fail`, res)
      }
    })
  }
})
