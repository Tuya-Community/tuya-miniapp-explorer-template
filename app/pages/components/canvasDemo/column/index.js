Page({
  data: {
    size: 1,
    b: 1,
  },
  onReady() {
    // const query = ty.createSelectorQuery();
    // query.select('#myCanvas').fields({size: true, scrollOffset:true, node: true}, function(res){
    //   console.log(1001, res)
    // }).exec()
    console.log('page onReady', this)
  },
  changePageData: function () {
    this.setData({
      size: this.data.size + 1,
    })
  },
  getPageData: function (params) {
    this.setData({
      b: this.data.b + 1,
    })
  },
})
