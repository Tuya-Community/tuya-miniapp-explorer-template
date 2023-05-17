Page({
  data: {
    systemInfo: {
      brand: i18n.t('getSystemInfo_8'),
      model: i18n.t('getSystemInfo_8'),
      language: i18n.t('getSystemInfo_8'),
      windowWidth: i18n.t('getSystemInfo_8'),
      windowHeight: i18n.t('getSystemInfo_8'),
      pixelRatio: i18n.t('getSystemInfo_8'),
    },
  },
  getSystemInfo() {
    let self = this
    ty.getSystemInfo({
      success(res) {
        console.log(`getSystemInfo ==== success`, res)
        self.setData({
          systemInfo: res,
        })
      },
    })
  },
  getSystemInfoSync() {
    const info = ty.getLaunchOptionsSync()
    console.log('getLaunchOptionsSync ==== success', info)
  },
})
