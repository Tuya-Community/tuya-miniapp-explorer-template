App({
  onLaunch(options) {
    console.log('tuya miniapp onLaunch', options)
  },
  onShow(options) {
    console.log('app.js中的 onShow 生命周期被触发', options)
  },
  onHide(options) {
    console.log('tuya miniapp onHide', options)
  },
  onEvent(options) {
    console.log('tuya miniapp onEvent', options)
  },
  onThemeChange(options) {
    console.log('tuya miniapp onThemeChange', options)
  },
  onError(error) {
    console.log('app.js中的 onError 生命周期被触发', error)
  },
  onPageNotFound(res) {
    console.log('app.js中的 onPageNotFound 生命周期被触发')
  },
  globalData: {
    name: 'tuya api',
  },
  throwError() {
    throw Error('error')
  },
})
