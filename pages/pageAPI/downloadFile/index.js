Page({
  data: {
    imageSrc: '',
  },
  downloadImage() {
    const self = this

    ty.downloadFile({
      url: 'https://images.tuyacn.com/rms-static/ef2b8b60-4756-11eb-a066-2bc8444523c6-1608972427030.png?tyName=logo.png',
      success: (res) => {
        console.log('downloadFile success, res is', JSON.stringify(res))
        ty.showToast({title: '下载成功'})
        self.setData({
          imageSrc: res.tempFilePath,
        })
      },
      fail: (res) => {
        console.log('downloadFile ============= fail', res)
      },
    })
  },
})
