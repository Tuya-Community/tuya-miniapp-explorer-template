Page({
  data: {
    focus: false,
    value: '',
    placeholder: 'will focus...',
    placeholderStyle: 'color:green',
  },
  bindTextAreainput: function (e) {
    console.log('demo bindTextAreainput', e.detail.value, e.detail)
    this.setData({
      value: e.detail.value,
    })
  },
  bindTextAreaFocus: function (e) {
    console.log('demo bindTextAreaFocus', e.detail.value, e.detail)
  },
  bindTextAreaBlur: function (e) {
    console.log('demo bindTextAreaBlur', e.detail.value, e.detail)
  },
  linechange: function (e) {
    console.log('demo linechange', e.detail)
  },
})
