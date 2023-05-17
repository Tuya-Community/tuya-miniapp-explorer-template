Page({
  data: {
    list: [
      {
        id: 'option',
        name: '操作反馈',
        open: false,
        pages: ['actionSheetEx', 'dialog', 'halfScreenDialog', 'topTips', 'searchbar'],
      },
      {
        id: 'base',
        name: '基础组件',
        open: false,
        pages: [
          'gallery',
          'flex',
          'footer',
          'badge',
          'iconEx',
          'loading',
          'tabbar',
          'navigationBarEx',
          'selectText',
          'drag',
          'tabs',
          'vtabs',
          'vlist',
          'grid',
        ],
      },
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['cell', 'checkboxEx', 'formpage', 'formEx', 'slideview', 'recycleview'],
      },
      {
        id: 'gesture',
        name: '手势库',
        open: false,
        pages: ['gesture'],
      },
    ],
  },
  kindToggle: function (e) {
    const id = e.currentTarget.dataset.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list,
    })
  },
  onPullDownRefresh() {
    console.log('demo onPullDownRefresh 触发执行')
  },
})
