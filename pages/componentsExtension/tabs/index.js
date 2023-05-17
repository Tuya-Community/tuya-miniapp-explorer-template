Page({
  data: {
    tabs: [{ title: i18n.t('tabbar_2') }, { title: i18n.t('tabbar_3') }],
    activeTab: 0,
  },

  onLoad() {
    // const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
    // const tabs = titles.map(item => ({title: item}))
    // this.setData({tabs})
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
  },

  addTab() {
    this.setData({
      tabs: [
        { title: i18n.t('tabbar_2') },
        { title: i18n.t('tabbar_3') },
        { title: i18n.t('tabbar_4') },
      ],
    })
  },
})
