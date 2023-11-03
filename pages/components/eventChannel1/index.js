Page({
  data: {},
  click(e) {
    ty.navigateTo({
      url: '/pages/components/eventChannel2/index?name=xiangling&age=18&grade=6',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log('页面一收到页面二发来的事件:', data)
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.$emit('acceptDataFromOpenedPage', { data: '页面一发送页面二事件' })
      },
    })
  },
})
