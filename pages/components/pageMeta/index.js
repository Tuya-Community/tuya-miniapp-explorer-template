Page({
  data: {
    nbBackgroundColor: '#ffffff',
  },
  setBackgroundColor() {
    this.setData({
      nbBackgroundColor: 'orange',
    })
  },
  handleScroll(e) {
    console.log(e)
  },
})
