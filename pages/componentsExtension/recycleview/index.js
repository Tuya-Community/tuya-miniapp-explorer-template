Page({
  data: {
    list: [],
  },
  onReady() {
    this.loadMore()
  },
  // 使用二维数组的结构，既可以提高setData性能，同时可以减少监听对象实例
  loadMore() {
    console.log('加载了一页数据')
    const demoList = this.getList(20)
    this.setData({
      [`list[${this.data.list.length}]`]: demoList
    })
  },
  getList(num) {
    const list = []
    for (let i = 0; i < num; i++) {
      list.push({
        height: this.getRadomHeight()
      })
    }
    return list
  },
  getRadomHeight() {
    return parseInt(Math.random() * 100 + 300)
  }
})
