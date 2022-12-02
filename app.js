App({
  onLaunch(options) {
    console.log('tuya miniapp onLaunch', options)
  },
  onShow(options) {
    console.log('app.js onShow triggered', options)
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
    console.log('app.js onError triggered', error)
  },
  onPageNotFound(res) {
    console.log('app.js onPageNotFound triggered')
  },
  globalData: {
    name: 'tuya api',
  },
  throwError() {
    throw Error('error')
  },
})
