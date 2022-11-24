const texts = [
  'here is the 1 line',
  'here is the 2 line, ',
  'here is the 3 line,',
  'here is the 4 line,',
  'here is the 5 line,',
  'here is the 6 line,',
  'here is the 7 line,',
  'here is the 8 line,',
  'here is the 9 line,',
  'here is the 10 line,',
  '......',
]

Page({
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text',
    }
  },

  data: {
    text: '',
    canAdd: true,
    canRemove: false,
  },
  extraLine: [],

  add() {
    this.extraLine.push(texts[this.extraLine.length % 12])
    let canAdd = this.extraLine.length < 12
    this.setData({
      text: this.extraLine.join('     '),
      canAdd: canAdd,
      canRemove: this.extraLine.length > 0,
    })
  },
  remove() {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('     '),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0,
      })
    }
  },
})