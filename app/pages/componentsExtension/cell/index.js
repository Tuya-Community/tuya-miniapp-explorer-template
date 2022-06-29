Page({
  onLoad: function () {
    // this.setData({
    //     icon: false,
    //     slideButtons: [{
    //       text: '普通',
    //       src: '', // icon的路径
    //     },{
    //       text: '普通',
    //       extClass: 'test',
    //       src: '', // icon的路径
    //     },{
    //       type: 'warn',
    //       text: '警示',
    //       extClass: 'test',
    //       src: '', // icon的路径
    //     }],
    // });
  },
  test: function (e) {
    console.log('11111111', e)
  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },
})
