Page({
  data: {
    typeF: false,
    typeS: false,
    typeT: false,
    buttons: [
      {
        type: 'default',
        className: '',
        text: '操作一',
        value: 0,
      },
      {
        type: 'primary',
        className: '',
        text: '操作二',
        value: 1,
      },
    ],
  },
  openTypeF: function () {
    this.setData({
      typeF: true,
    })
  },
  openTypeS: function () {
    this.setData({
      typeS: true,
    })
  },
  openTypeT: function () {
    this.setData({
      typeT: true,
    })
  },
  buttontap(e) {
    console.log(e.detail)
  },
  onCloseTypeF() {
    this.setData({
      typeF: false,
    })
  },
  onCloseTypeS() {
    this.setData({
      typeS: false,
    })
  },
  onCloseTypeT() {
    this.setData({
      typeT: false,
    })
  },
})
