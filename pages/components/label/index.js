Page({
  data: {
    checkboxItems: [
      { name: 'USA', value: 'USA' },
      { name: 'CHN', value: 'CHN', checked: 'true' },
      { name: 'BRA', value: 'BRA' },
      { name: 'JPN', value: 'JPN', checked: 'true' },
      { name: 'ENG', value: 'ENG' },
      { name: 'TUR', value: 'TUR' },
    ],
    radioItems: [
      { name: 'USA', value: 'USA' },
      { name: 'CHN', value: 'CHN', checked: 'true' },
      { name: 'BRA', value: 'BRA' },
      { name: 'JPN', value: 'JPN' },
      { name: 'ENG', value: 'ENG' },
      { name: 'TUR', value: 'TUR' },
    ],
    hidden: false,
  },
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = this.data
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = this.data
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
})
