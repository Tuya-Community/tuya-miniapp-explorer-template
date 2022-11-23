Page({
  data: {
    appear: false,
    show: true,
  },
  onReady() {
    this._observer = ty.createIntersectionObserver()
    this._observer.relativeTo('.scroll-view').observe('.ball', (res) => {
      console.log('ioPage ball ovserver', res, res.intersectionRatio > 0)
      this.setData({
        appear: res.intersectionRatio > 0,
      })
    })

    // setTimeout(() => {
    //   this._observer.disconnect()
    //   this._observer2 = ty.createIntersectionObserver()
    //   this._observer2
    //     .relativeTo('.scroll-view')
    //     .observe('.ball2', (res) => {
    //       console.log('这里是ioPage的 ball2 observer的大型触发现场', res, res.intersectionRatio > 0);
    //       // this.setData({
    //       //   appear: res.intersectionRatio > 0
    //       // })
    //     })
    // }, 5000);
  },
  onUnload() {
    if (this._observer) this._observer.disconnect()
  },
  click() {
    this.setData({
      show: true,
    })
  },
})
