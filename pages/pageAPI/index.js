Page({
  data: {
    isSetTabBarPage: false,
    list: [
      {
        id: 'page',
        name: i18n.t('api_1'),
        open: false,
        pages: [
          {
            zh: i18n.t('api_2'),
            url: 'navigationBarLoading/index',
          },
          {
            zh: i18n.t('api_3'),
            url: '@set-tab-bar',
          },
          {
            zh: i18n.t('api_4'),
            url: 'navigators/index',
          },
          {
            zh: i18n.t('api_5'),
            url: 'actionSheet/index',
          },
          {
            zh: i18n.t('api_6'),
            url: 'modal/index',
          },
          {
            zh: i18n.t('api_7'),
            url: 'toast/index',
          },
          {
            zh: i18n.t('apiShowStatusBar'),
            url: 'showStatusBar/index',
          },
          {
            zh: i18n.t('hideHomeButton'),
            url: 'hideHomeButton/index',
          },
          {
            zh: i18n.t('showLoading'),
            url: 'showLoading/index',
          },
          {
            zh: i18n.t('showMenuButton'),
            url: 'showMenuButton/index',
          },
          {
            zh: i18n.t('startPullDownRefresh'),
            url: 'startPullDownRefresh/index',
          },
        ],
      },
      {
        id: 'device',
        name: i18n.t('api_8'),
        open: false,
        pages: [
          {
            zh: i18n.t('api_9'),
            url: 'getSystemInfo/index',
          },
          {
            zh: i18n.t('api_10'),
            url: 'makePhoneCall/index',
          },
          {
            zh: i18n.t('scanCode'),
            url: 'scanCode/index',
          },
          {
            zh: i18n.t('api_11'),
            url: 'clipboardData/index',
          },
          {
            zh: i18n.t('screenBrightness'),
            url: 'screenBrightness/index',
          },
          {
            zh: i18n.t('updateVolume'),
            url: 'updateVolume/index',
          },
          {
            zh: i18n.t('vibrate'),
            url: 'vibrate/index',
          },
          {
            zh: i18n.t('getUserInfo'),
            url: 'getUserInfo/index',
          },
          {
            zh: i18n.t('getSystemSetting'),
            url: 'getSystemSetting/index',
          },
          {
            zh: i18n.t('getAccountInfo'),
            url: 'getAccountInfo/index',
          },
          {
            zh: i18n.t('getAppInfo'),
            url: 'getAppInfo/index',
          },
          {
            zh: i18n.t('getLangContent'),
            url: 'getLangContent/index',
          },
          {
            zh: i18n.t('getMenuButtonBoundingClientRect'),
            url: 'getMenuButtonBoundingClientRect/index',
          },
        ],
      },
      {
        id: i18n.t('network'),
        name: '网络',
        open: false,
        pages: [
          {
            zh: i18n.t('networkRequest'),
            url: 'networkRequest/index',
          },
          {
            zh: i18n.t('uploadFile'),
            url: 'uploadFile/index',
          },
          {
            zh: i18n.t('downloadFile'),
            url: 'downloadFile/index',
          },
          {
            zh: i18n.t('getNetworkType'),
            url: 'getNetworkType/index',
          },
          {
            zh: i18n.t('getWifiList'),
            url: 'getWifiList/index',
          },
          {
            zh: i18n.t('getConnectedWifi'),
            url: 'getConnectedWifi/index',
          },
        ],
      },
      {
        id: 'location',
        name: i18n.t('location'),
        open: false,
        pages: [
          {
            zh: i18n.t('getLocation'),
            url: 'getLocation/index',
          },
        ],
      },
      {
        id: i18n.t('api_12'),
        name: i18n.t('api_13'),
        pages: [
          {
            zh: 'local storage',
            url: 'storage/index',
          },
        ],
      },
    ],
  },
  kindToggle(e) {
    const id = e.currentTarget.dataset.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          ty.navigateTo({
            url: '/pages/pageAPI/' + list[i].url,
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list,
    })
  },
  enterSetTabBarPage() {
    this.setData({
      isSetTabBarPage: true,
    })
  },
  navigateBack() {
    this.setData({
      isSetTabBarPage: false,
    })
  },

  setTabBarBadge() {
    if (this.data.hasSetTabBarBadge) {
      this.removeTabBarBadge()
      return
    }
    this.setData({
      hasSetTabBarBadge: true,
    })
    ty.setTabBarBadge({
      index: 1,
      text: '1',
    })
  },

  removeTabBarBadge() {
    this.setData({
      hasSetTabBarBadge: false,
    })
    ty.removeTabBarBadge({
      index: 1,
    })
  },

  showTabBarRedDot() {
    if (this.data.hasShownTabBarRedDot) {
      this.hideTabBarRedDot()
      return
    }
    this.setData({
      hasShownTabBarRedDot: true,
    })
    ty.showTabBarRedDot({
      index: 1,
    })
  },

  hideTabBarRedDot() {
    this.setData({
      hasShownTabBarRedDot: false,
    })
    ty.hideTabBarRedDot({
      index: 1,
    })
  },

  showTabBar() {
    this.setData({ hasHiddenTabBar: false })
    ty.showTabBar({ animation: true })
  },

  hideTabBar() {
    if (this.data.hasHiddenTabBar) {
      this.showTabBar()
      return
    }
    this.setData({ hasHiddenTabBar: true })
    ty.hideTabBar({ animation: true })
  },

  customStyle() {
    if (this.data.hasCustomedStyle) {
      this.removeCustomStyle()
      return
    }
    this.setData({ hasCustomedStyle: true })
    ty.setTabBarStyle({
      color: '#FFF',
      selectedColor: '#1AAD19',
      backgroundColor: '#000000',
    })
  },

  removeCustomStyle() {
    this.setData({ hasCustomedStyle: false })
    ty.setTabBarStyle({
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      backgroundColor: '#ffffff',
    })
  },

  customItem() {
    if (this.data.hasCustomedItem) {
      this.removeCustomItem()
      return
    }
    this.setData({ hasCustomedItem: true })
    ty.setTabBarItem({
      index: 1,
      text: 'API',
      iconPath: '/assets/images/tab/extension.png',
      selectedIconPath: '/assets/images/tab/extension_selected.png',
    })
  },

  removeCustomItem() {
    this.setData({ hasCustomedItem: false })
    ty.setTabBarItem({
      index: 1,
      text: 'window',
      iconPath: '/assets/images/tab/component.png',
      selectedIconPath: '/assets/images/tab/component_selected.png',
    })
  },
})
