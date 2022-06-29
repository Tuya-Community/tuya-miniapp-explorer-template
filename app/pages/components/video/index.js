function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1,
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3,
      },
    ],
    value: '',
  },
  inputValue: '',
  onLoad() {
    this.videoContext = ty.createVideoContext('myVideo')
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor(),
    })
    this.setData({ value: '' })
  },
  bindStop: function () {
    this.videoContext.stop()
  },
  bindPlay: function () {
    this.videoContext.play()
  },
  bindPause: function () {
    this.videoContext.pause()
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  onMute: function () {
    this.videoContext.mute(false)
  },
  onPlaybackRate: function () {
    this.videoContext.playbackRate(2)
  },
})
