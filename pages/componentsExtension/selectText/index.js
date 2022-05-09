Page({
  data: {
    arr: [
      {
        value: '点击，上侧复制',
        placement: 'top',
      },
      {
        value: '点击，右侧复制',
        placement: 'right',
      },
      {
        value: '点击，左侧复制',
        placement: 'left',
      },
      {
        value: '点击，下侧复制',
        placement: 'bottom',
      },
    ],
    copyContent: '',
  },

  handleTap(e) {
    this.setData({ evt: e })
  },

  getCopyContent() {
    let self = this
    ty.getClipboardData({
      success(res) {
        console.log('copy的内容', res)
        self.setData({
          copyContent: res.data,
        })
      },
    })
  },
})
