Page({
  data: {
    devicePosition: 'back',
    flash: 'off',
    src: '',
  },
  onReady() {
    this.ctx = ty.createCameraContext()
  },
  devicePositionCHnage() {
    this.setData({
      devicePosition: this.data.devicePosition === 'back' ? 'front' : 'back',
    })
  },
  flashChange() {
    this.setData({
      flash: this.data.flash === 'off' ? 'on' : 'off',
    })
  },
  stop(e) {
    console.log('demo stop', e)
  },
  error(e) {
    console.log('demo error', e)
  },
  initdone(e) {
    console.log('demo initdone', e)
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
        })
      },
      fail: (res) => {
        console.log('demo takePhoto fail', res)
      },
    })
  },
  setZoom() {
    this.ctx.setZoom({
      zoom: 5,
      success: (res) => {
        console.log('demo setZoom success', res)
      },
      fail: (res) => {
        console.log('demo setZoom fail', res)
      },
    })
  },
})
