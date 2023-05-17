Page({
  data: {
    text: '选择图片',
    imageSrc: '',
  },
  chooseImage() {
    const self = this

    ty.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        console.log('chooseImage success, temp path is ==== ', res.tempFilePaths[0])
        const imageSrc = res.tempFilePaths[0]

        ty.uploadFile({
          requestId: 'uploadFile',
          url: 'https://weap-panel-h5.ismartlife.me', // 上传至云端的路径
          filePath: imageSrc, // 小程序临时文件路径
          name: 'test',
          success: (res) => {
            // 返回文件 ID
            console.log('uploadImage success, res is:', JSON.stringify(res))

            self.setData({
              imageSrc,
            })
          },
          fail({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          },
        })
      },

      fail: (res) => {
        console.log('uploadImage fail, errMsg is', res.errMsg)
      },
    })
  },
})
