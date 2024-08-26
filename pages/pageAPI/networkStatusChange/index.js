Page({
  data: {
    json: i18n.t('networkStatusChangeTips'),
  },
  onLoad() {
    ty.onNetworkStatusChange((res) => {
      console.log('onNetworkStatusChange', res)
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
  onUnload() {
    ty.offNetworkStatusChange()
  },

  offNetworkStatusChange() {
    ty.showToast({ title: 'offNetworkStatusChange' })
    ty.offNetworkStatusChange((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
})
