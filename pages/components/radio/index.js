Page({
  data: {
    items: [
      { name: 'USA', value: 'USA' },
      { name: 'CHN', value: 'CHN', checked: 'true' },
      { name: 'BRA', value: 'BRA' },
      { name: 'JPN', value: 'JPN' },
      { name: 'ENG', value: 'ENG' },
      { name: 'FRA', value: 'FRA' },
    ],
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
})
