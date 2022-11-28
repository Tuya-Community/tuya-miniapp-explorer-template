Page({
  data: {
    toView: 'demo5',
  },
  upper(e) {
    console.log('demo upper', e)
  },
  lower(e) {
    console.log('demo lower', e)
  },
  scroll(e) {
    console.log('demo scroll', e)
  },
  onPullDownRefresh() {
    console.log('demo onPullDownRefresh triggered')
  },
})
