Page({
  data: {
    result: [],
    inputShowed: false,
    inputVal: '',
    i: 0,
  },
  handleInput(e) {
    console.log('handle input', e)
    this.searchFn(e.detail.value)
  },
  searchFn: function (value) {
    if (this.data.i % 2 === 0) {
      this.setData({
        result: [
          { text: 'result', value: 1 },
          { text: 'result2', value: 2 },
        ],
        i: this.data.i + 1,
      })
    } else {
      this.setData({
        result: [],
        i: this.data.i + 1,
      })
    }
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
})
