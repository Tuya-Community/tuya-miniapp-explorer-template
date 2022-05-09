Page({
  data: {
    result: [],
    inputShowed: false,
    inputVal: '',
    i: 0,
  },
  onLoad() {
    // this.setData({
    //     search: this.search.bind(this)
    // })
  },
  handleInput(e) {
    console.log('handle input', e)
    this.searchFn(e.detail.value)
  },
  searchFn: function (value) {
    if (this.data.i % 2 === 0) {
      this.setData({
        result: [
          { text: '搜索结果', value: 1 },
          { text: '搜索结果2', value: 2 },
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
  /* search: function (value) {
        return new Promise((resolve, reject) => {
            if (this.data.i % 2 === 0) {
                setTimeout(() => {
                    resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
                }, 200)
            } else {
                setTimeout(() => {
                    resolve([])
                }, 200)

            }
            this.setData({
                i: this.data.i + 1
            })
        })
    }, */
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
})
