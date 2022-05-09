Page({
  data: {
    animation: [],
    testData: 1,
  },
  jumpToPageNotFound: function () {
    ty.navigateTo({
      url: 'url',
    })
  },
  onLoad: function () {
    setInterval(() => {
      this.setData(
        {
          testData: this.data.testData + 1,
        },
        () => {}
      )
    }, 500)
  },
  onReady: function () {
    this.animation = ty.createAnimation()
    ty.onPageNotFound(() => {
      console.log('animation 页面的onPageNotFound 被触发')
    })
    ty.onError((error) => {
      console.log('animation 页面的ty.onError 被触发', error)
    })
  },
  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
  },
  scale: function () {
    this.animation.scale(Math.random() * 2).step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  translate: function () {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  skew: function () {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  rotateAndScale: function () {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  rotateThenScale: function () {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  all: function () {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  allInQueue: function () {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step()
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
  reset: function () {
    this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({ duration: 0 })
    let anim = this.animation.export()
    this.setData({ animation: anim })
    console.log(anim)
  },
})
