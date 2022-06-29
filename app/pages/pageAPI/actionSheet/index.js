Page({
  actionSheetTap() {
    ty.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success(e) {
        console.log(e.tapIndex)
      },
    })
  },
})
