Page({
  data: {
    systemInfo: {
      brand: '未获取',
      model: '未获取',
      language: '未获取',
      windowWidth: '未获取',
      windowHeight: '未获取',
      pixelRatio: '未获取',
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
