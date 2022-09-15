Page({
  data: {
    lastName: 'tony',
    firstName: 'zhang',
    mobilePhoneNumber: '10086',
  },
  submit(e) {
    const formData = e.detail.value
    console.log('formData', formData)
    ty.addPhoneContact({
      ...formData,
      success(res) {
        console.log('addPhoneContact ====== success', res)
      },
      fail(res) {
        console.log('addPhoneContact ====== fail', res)
      },
    })
  },
})
