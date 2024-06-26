Page({
  data: {
    modalHidden: true,
    modalHidden2: true,
  },
  modalTap() {
    try {
      ty.showModal({
        title: '弹窗标题',
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#ff0000',
      })
    } catch (e) {
      console.log('object ====', e.toString())
    }
  },
  noTitlemodalTap() {
    ty.showModal({
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: '确定',
      cancelText: '取消',
      confirmColor: '#00ff00',
    })
  },
})
