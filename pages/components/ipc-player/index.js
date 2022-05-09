Page({
  data: {
    deviceId: 'vdevo164759164131606',
    tempImagePath: '',
    isShow: true,
    orientation: 'vertical',
    objectFit: 'contain'
  },
  onReady() {
    this.ctx = ty.createIpcPlayerContext(this.data.deviceId)
  },
  onUnload() {
    this.ctx.disconnect({
      success: res => {
        console.log('demo disconnect success')
      },
    })
  },
  initIpc() {
    this.ctx = ty.createIpcPlayerContext(this.data.deviceId)
    this.ctx.connect({
      success: res => {
        this.ctx.startPreview({
          success: res => {
            console.log('demo 开启预览成功')
          },
          fail: res => {
            console.log('demo 开启预览失败')
          }
        })
      },
      fail: res => {
        console.log('demo 建立通道连接失败')
      }
    })
  },
  onConnectChange(e) {
    console.log('demo onConnectChange 事件触发', e)
  },
  onError(e) {
    console.log('demo onError 事件触发', e)
  },
  snapshot() {
    this.ctx.snapshot({
      success: res => {
        console.log('demo snapshot API 调用成功', res)
        this.setData({
          tempImagePath: res.tempImagePath
        })
      },
      fail: res => {
        console.log('demo snapshot API 调用失败', res)
      }
    })
  },
  setMuted1() {
    this.ctx.setMuted({
      mute: true,
      success: res => {
        console.log('demo setMuted API 开启成功', res)
      },
      fail: res => {
        console.log('demo setMuted API 开启失败', res)
      }
    })
  },
  setMuted2() {
    this.ctx.setMuted({
      mute: false,
      success: res => {
        console.log('demo setMuted API 关闭成功', res)
      },
      fail: res => {
        console.log('demo setMuted API 关闭失败', res)
      }
    })
  },
  setSoundMode1() {
    this.ctx.setSoundMode({
      mode: 'speaker',
      success: res => {
        console.log('demo setSoundMode API 扬声器播放成功', res)
      },
      fail: res => {
        console.log('demo setSoundMode API 扬声器播放失败', res)

      }
    })
  },
  setSoundMode2() {
    this.ctx.setSoundMode({
      mode: 'ear',
      success: res => {
        console.log('demo setSoundMode API 听筒播放成功', res)
      },
      fail: res => {
        console.log('demo setSoundMode API 听筒播放失败', res)

      }
    })
  },
  setClarity1() {
    this.ctx.setClarity({
      clarity: 'normal',
      success: res => {
        console.log('demo setClarity API 标清成功', res)
      },
      fail: res => {
        console.log('demo setClarity API 标清失败', res)
      }
    })
  },
  setClarity2() {
    this.ctx.setClarity({
      clarity: 'hd',
      success: res => {
        console.log('demo setClarity API 高清成功', res)
      },
      fail: res => {
        console.log('demo setClarity API 高清失败', res)
      }
    })
  },
  orientationChange() {
    this.setData({
        orientation: this.data.orientation == 'vertical' ? 'horizontal' :  'vertical',
    });
  },
  objectFitChange() {
    this.setData({
      objectFit: this.data.objectFit == 'contain' ? 'fillCrop' :  'contain',
  });
  }
})