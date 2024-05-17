Page({
  data: {
    value: 0,
  },
  updateVolume() {
    ty.updateVolume({
      value: Math.random().toFixed(1),
      success() {
        ty.showToast({
          title: 'success',
        })
      },
      fail(err) {
        console.log('fail:', err)
        ty.showToast({
          title: 'fail',
        })
      },
    })
  },
})
