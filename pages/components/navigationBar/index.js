Page({
  data: {
    nbTitle: '',
    nbLoading: false,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  setTitle() {
    this.setData({
      nbTitle: 'new title',
    })
  },
  showLoading() {
    this.setData({
      nbLoading: true,
    })
  },
  setFontColor() {
    this.setData({
      nbFrontColor: 'red',
    })
  },
  setBackgroundColor() {
    this.setData({
      nbBackgroundColor: 'orange',
    })
  },
})
