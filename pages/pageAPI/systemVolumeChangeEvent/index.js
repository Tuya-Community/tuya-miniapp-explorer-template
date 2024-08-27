Page({
  data: {
    json: i18n.t('systemVolumeChangeEventChangeTips'),
  },
  onLoad() {
    ty.onSystemVolumeChangeEvent((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
  onUnload() {
    ty.offSystemVolumeChangeEvent()
  },

  offSystemVolumeChangeEvent() {
    ty.showToast({ title: 'offSystemVolumeChangeEvent' })
    ty.offSystemVolumeChangeEvent((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
})
