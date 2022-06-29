Page({
  data: {
    audioCtx: {
      ContextId: 'ty_audio',
      src: 'https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a',
      startTime: 0,
      autoplay: false,
      loop: false,
      volume: 1,
      playbackRate: 1,
    },
  },
  onLoad() {
    // 使用 ty.createAudioContext 获取 audio 上下文 context 需要前端js封装
    // this.audioCtx = ty.createInnerAudioContext()
    // this.audioCtx.src = 'https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a'
    // console.log(`this.audioCtx`, this.audioCtx)
  },
  onUnload() {
    this.audioCtx.stop()
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.stop()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
})
