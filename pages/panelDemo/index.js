Page({
  data: {
    arr: [],
  },

  onLoad() {
    let arr = []
    for (let index = 0; index < 10000; index++) {
      arr.push({ a: 'aaaa', key: index + 1 })
    }
    this.setData({
      arr,
    })
  },
  update() {
    let arr = []
    for (let index = 0; index < 10000; index++) {
      arr.push({ a: 'bbbb', key: index + 1 })
    }
    this.setData({
      arr,
    })
  },
  add1000() {
    let arr = []
    for (let index = 0; index < 1000; index++) {
      arr.push({ a: 'bbbb', key: index + 1 })
    }
    this.setData({
      arr: this.data.arr.concat(arr),
    })
  },
  change10Item() {
    this.setData({
      'arr[10]': {
        a: 'ddddd',
        index: 10,
      },
    })
  },
  change300Item() {
    this.setData({
      'arr[300]': {
        a: 'ffff',
        index: 300,
      },
    })
  },
  change9999Item() {
    this.setData({
      'arr[9999]': {
        a: 'ffff',
        index: 9999,
      },
    })
  },
})
