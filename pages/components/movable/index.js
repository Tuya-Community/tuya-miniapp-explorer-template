Page({
  data: {
    x: 0,
    y: 0,
    x1: 20,
    y1: 20,
    printContent: '',
  },
  // 移动到30px,30px
  moveFn() {
    // console.log('设置30px 30px')
    this.setData({
      x: 30,
      y: 30,
    })
  },
  moveStep() {
    const x = this.data.x + 10
    const y = this.data.y + 10
    // console.log(`设置 ${x}px ${y}px`)
    this.setData({
      x,
      y,
    })
  },
  handleTouchMove(ev) {
    // console.log(ev)
    ev.preventDefault()
  },

  handleChange(ev) {
    // console.log('change', ev)
  },

  handlehtouchmove(ev) {
    // console.log('htouchmove', ev)
  },

  handlevtouchmove(ev) {
    // console.log('vtouchmove', ev)
  },

  handlePrint(ev) {
    console.log(ev)
    let strDetail = JSON.stringify(ev.detail, null, 2)
    strDetail = strDetail.slice(0, strDetail.length - 1).slice(1)
    this.setData({
      printContent: strDetail,
    })
  },
})
