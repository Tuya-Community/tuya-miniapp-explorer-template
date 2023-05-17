Page({
  data: {
    value: 'edit and copy me',
    pasted: '',
  },

  valueChanged(e) {
    this.setData({
      value: e.detail.value,
    })
  },

  copy() {
    ty.setClipboardData({
      data: this.data.value,
      success(res) {
        console.log(`setClipboardData ========= success `, res)
        // wx.showToast({
        //   title: '复制成功',
        //   icon: 'success',
        //   duration: 1000
        // })
      },
      fail(res) {
        console.log(`setClipboardData ========= fail `, res)
      },
    })
  },

  paste() {
    const self = this
    ty.getClipboardData({
      success(res) {
        console.log(`getClipboardData ========= success `, res)
        self.setData({
          pasted: res.data,
        })
        // wx.showToast({
        //   title: '粘贴成功',
        //   icon: 'success',
        //   duration: 1000
        // })
      },
      fail(res) {
        console.log(`getClipboardData ========= fail `, res)
      },
    })
  },
})
