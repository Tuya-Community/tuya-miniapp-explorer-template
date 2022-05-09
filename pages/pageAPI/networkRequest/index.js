const requestUrl = 'https://weapp-public-panel.ismartlife.me/6449742995.txt'

const duration = 2000

Page({
  makeRequest() {
    const self = this

    self.setData({
      loading: true
    })

    ty.request({
      url: requestUrl,
      requestId: 'test-request',
      method: "GET",
      success(result) {
        self.setData({
          loading: false
        })
        ty.showModal({
          title: '请求成功',
          content: `${result.data}`,
          confirmText: '确定',
          cancelText: '取消'
        })

        console.log('request success', result)
      },

      fail({errMsg}) {
        console.log('request fail', errMsg)
        ty.showToast({
          title: '请求失败',
          icon: 'none'
        })
        self.setData({
          loading: false
        })
      }
    })
  }
})
