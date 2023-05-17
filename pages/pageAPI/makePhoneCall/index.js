Page({
  data: {
    disabled: true,
  },
  bindInput(e) {
    this.inputValue = e.detail.value

    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false,
      })
    } else {
      this.setData({
        disabled: true,
      })
    }
  },
  makePhoneCall() {
    ty.makePhoneCall({
      phoneNumber: this.inputValue,
      success() {
        console.log('success')
      },
    })
  },
})
