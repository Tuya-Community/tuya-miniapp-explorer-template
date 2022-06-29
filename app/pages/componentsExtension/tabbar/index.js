Page({
  data: {
    list: [
      {
        text: '微信',
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
        badge: '8',
      },
      {
        text: '通讯录',
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
      },
      {
        text: '发现',
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
        dot: true,
      },
      {
        text: '我',
        iconPath: '/assets/images/tab/component.png',
        selectedIconPath: '/assets/images/tab/component_selected.png',
      },
    ],
  },
  tabChange(e) {
    console.log('tab change', e)
  },
})
