Page({
  data: {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{ text: i18n.t('dialog_cancel') }, { text: i18n.t('dialog_confirm') }],
    oneButton: [{ text: i18n.t('dialog_confirm') }],
  },
  openConfirm: function () {
    this.setData({
      dialogShow: true,
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false,
    })
  },
  tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true,
    })
  },
})
