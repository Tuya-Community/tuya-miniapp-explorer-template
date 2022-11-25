Page({
  data: {
    list: [
      {
        text: i18n.t('tabbar_2'),
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
        badge: '8',
      },
      {
        text: i18n.t('tabbar_3'),
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
      },
      {
        text: i18n.t('tabbar_4'),
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
        dot: true,
      },
      {
        text: i18n.t('tabbar_5'),
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
      },
    ],
  },
  tabChange(e) {
    console.log('tab change', e)
  },
})
