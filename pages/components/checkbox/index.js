Page({
  data: {
    switch1Checked: true,
    items: [
      { value: 'USA', name: '美国', checked: false },
      { value: 'CHN', name: '中国', checked: 'true' },
      // {value: 'BRA', name: '巴西'},
      // {value: 'JPN', name: '日本'},
      // {value: 'ENG', name: '英国'},
      // {value: 'FRA', name: '法国'}
    ],
  },
  checkboxChange(e) {
    console.log('222222223 e.detail.value checkboxChange 业务', e.detail.value)
    // const items = this.data.items
    // const values = e.detail.value
    // for (let i = 0, lenI = items.length; i < lenI; ++i) {
    //   items[i].checked = false
    //   for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
    //     if (items[i].value === values[j]) {
    //       items[i].checked = true
    //       break
    //     }
    //   }
    // }
    // this.setData({
    //   items
    // }, ()=>{
    //   console.log(items)
    // })
  },
})
