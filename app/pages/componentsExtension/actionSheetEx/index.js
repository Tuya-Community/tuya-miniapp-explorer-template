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
      { text: '菜单1', value: 1 },
      { text: '菜单12', value: 2 },
      { text: '菜单123', type: 'warn', value: 3 },
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
