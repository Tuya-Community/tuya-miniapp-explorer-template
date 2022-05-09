Page({
  data: {
    focus: true,
    inputValue: '',
    placeholder: '最大输入长度为10',
    placeholderStyle: 'color:green',
  },
  // onShow: function(){
  //   setTimeout(()=>{
  //     this.setData({
  //       placeholder: "input最大输入长度为10",
  //       placeholderStyle: "color:gray;font-size:20px;"
  //     })
  //   }, 3000)
  // },
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
