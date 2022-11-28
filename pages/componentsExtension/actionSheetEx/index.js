Page({
  // open: function(){
  //     wx.showActionSheet({
  //         itemList: ['A', 'B', 'C'],
  //         success: function(res) {
  //             if (!res.cancel) {
  //                 console.log(res.tapIndex)
  //             }
  //         }
  //     });
  // },
  data: {
    showDialog: false,
    groups: [
      { text: 'menu1', value: 1 },
      { text: 'menu2', value: 2 },
      { text: 'menu3', type: 'warn', value: 3 },
    ],
  },
  openDialog: function () {
    this.setData({
      showDialog: true,
    })
  },
  closeDialog: function () {
    this.setData({
      showDialog: false,
    })
  },
  btnClick() {
    this.closeDialog()
  },
  touchmove(e) {
    console.log(e)
  },
})
