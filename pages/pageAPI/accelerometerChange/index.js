Page({
  data: {
    json: i18n.t('accelerometerChangeTips'),
  },
  onLoad() {
    ty.onAccelerometerChange((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
  onUnload() {
    ty.offAccelerometerChange()
  },

  offAccelerometerChange() {
    ty.showToast({ title: 'offAccelerometerChange' })
    ty.offAccelerometerChange((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
})
