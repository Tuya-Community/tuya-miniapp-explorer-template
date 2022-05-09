Page({
  data: {
    hello: 123,
    showView: true,
    count: 1,
    count2: 1,
    length: 1,
    dataTitle: '标题来自data',
  },
  click(e) {
    this.setData({
      count: this.data.count + 1,
      count2: this.data.count2 + 1,
    })
  },
  onLoad(option) {
    console.log('这里是url上携带的参数：', option)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.$emit('acceptDataFromOpenedPage', { data: '从页面二传送回页面一的事件' })
    eventChannel.$on('acceptDataFromOpenerPage', function (data) {
      console.log('页面二收到来自页面一的事件', data)
    })
  },
  onUnload() {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.$off('acceptDataFromOpenedPage')
  },
})
