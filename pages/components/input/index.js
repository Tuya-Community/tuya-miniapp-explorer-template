Page({
  data: {
    focus: true,
    inputValue: '',
    placeholder: 'maxlength 10',
    placeholderStyle: 'color:green',
  },
  bindKeyInput: function (e) {
    console.log('demo bindKeyInput', e.detail.value, e.detail)
    this.setData({
      inputValue: e.detail.value,
    })
  },
  bindKeyFocus: function (e) {
    console.log('demo bindKeyFocus', e.detail.value, e.detail)
  },
  bindKeyBlur: function (e) {
    console.log('demo bindKeyBlur', e.detail.value, e.detail)
  },
  bindKeyConfirm: function (e) {
    console.log('demo bindKeyConfirm', e.detail.value, e.detail)
  },
})
