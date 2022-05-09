function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  const hour = parseInt(time / 3600, 10)
  time %= 3600
  const minute = parseInt(time / 60, 10)
  time = parseInt(time % 60, 10)
  const second = time

  return [hour, minute, second]
    .map(function (n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    })
    .join(':')
}

let playTimeInterval
let recordTimeInterval
const innerAudioContext = {}

Page({
  data: {
    recording: false, // 录音中
    playing: false, // 播放中
    hasRecord: false, // 已经录音
    recordTime: 0, // 录音时长
    playTime: 0, // 播放时长
    formatedRecordTime: '00:00:00', // 录音时间
    formatedPlayTime: '00:00:00', // 播放时间
  },

  onReady() {
    this.recorderManager = ty.getRecorderManager()
  },

  onLoad() {
    try {
      ty.authorize({
        scope: 'scope.record',
      })
    } catch (err) {
      console.log(err)
    }
  },

  onUnload() {
    recordTimeInterval && clearInterval(recordTimeInterval)
  },

  startRecord() {
    let that = this
    this.setData({
      recording: true, // 录音开始
    })
    // 设置 Recorder 参数
    const options = {
      duration: 10000, // 持续时长
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50,
    }

    that.recorderManager.startRecording({
      period: 30,
      success: function (res) {
        try {
          that.recorderManager.onRecordingEvent((res) => {
            console.log(`onRecordingEvent ===`, res)
          })
        } catch (err) {
          console.log('startRecording success', err)
        }

        that.setData({
          tempFilePath: res.tempFilePath,
          recording: true, // 录音开始
        })
      },
    })
    // 开始计时
    recordTimeInterval = setInterval(() => {
      const recordTime = (that.data.recordTime += 1)
      that.setData({
        formatedRecordTime: formatTime(that.data.recordTime),
        recordTime,
      })
    }, 1000)
  },

  stopRecord() {
    let that = this
    that.recorderManager.stopRecording({
      success: function () {
        that.setData({
          hasRecord: true, // 完成录音
          recording: false, // 录音结束
          formatedPlayTime: formatTime(that.data.playTime),
        })
      },
      complete: function () {
        console.log('stopRecord complete ===== 1')
        // 清除录音计时器
        recordTimeInterval && clearInterval(recordTimeInterval)
      },
    })
    that.setData({
      hasRecord: true, // 完成录音
      recording: false, // 录音结束
      formatedPlayTime: formatTime(that.data.playTime),
    })
    recordTimeInterval && clearInterval(recordTimeInterval)
  },

  playVoice() {
    innerAudioContext.src = this.data.tempFilePath
    this.setData(
      {
        playing: true,
      },
      () => {
        innerAudioContext.play()
      }
    )
  },

  pauseVoice() {
    clearInterval(playTimeInterval)
    innerAudioContext.pause()
    this.setData({
      playing: false,
    })
  },

  stopVoice() {
    innerAudioContext.stop()
    this.setData({
      playing: false,
      formatedPlayTime: formatTime(0),
      playTime: 0,
    })
  },

  clear() {
    innerAudioContext.stop()
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
      formatedRecordTime: formatTime(0),
      recordTime: 0,
      playTime: 0,
    })
  },
})
