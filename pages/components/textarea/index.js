Page({
  data: {
    focus: false,
    value: '',
    placeholder: '将会获取焦点',
    placeholderStyle: 'color:green',
  },
  // onShow: function(){
  //   setTimeout(()=>{
  //     this.setData({
  //       placeholder: "将会获取焦点1111",
  //       placeholderStyle: "color:red;font-size:20px;"
  //     })
  //   }, 5000)
  // },
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
