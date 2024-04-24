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
            zh: i18n.t('显示隐藏状态栏'),
            url: 'showStatusBar/index',
          },
          {
            zh: i18n.t('隐藏返回首页按钮'),
            url: 'hideHomeButton/index',
          },
          {
            zh: i18n.t('显示 loading 提示框'),
            url: 'showLoading/index',
          },
          {
            zh: i18n.t('显示右上角胶囊按钮'),
            url: 'showMenuButton/index',
          },
          {
            zh: i18n.t('开始下拉刷新'),
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
            zh: '扫码',
            url: 'scanCode/index',
          },
          {
            zh: i18n.t('api_11'),
            url: 'clipboardData/index',
          },
          {
            zh: '屏幕亮度',
            url: 'screenBrightness/index',
          },
          {
            zh: '设置系统音量',
            url: 'updateVolume/index',
          },
          {
            zh: '振动',
            url: 'vibrate/index',
          },
          {
            zh: '用户信息',
            url: 'getUserInfo/index',
          },
          {
            zh: '获取设备设置',
            url: 'getSystemSetting/index',
          },
          {
            zh: '获取小程序账号信息',
            url: 'getAccountInfo/index',
          },
          {
            zh: '获取 App 业务信息',
            url: 'getAppInfo/index',
          },
          {
            zh: '获取多语言',
            url: 'getLangContent/index',
          },
          {
            zh: '获取菜单按钮的布局位置信息',
            url: 'getMenuButtonBoundingClientRect/index',
          },
        ],
      },
      {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'networkRequest/index',
          },
          {
            zh: '上传文件',
            url: 'uploadFile/index',
          },
          {
            zh: '下载文件',
            url: 'downloadFile/index',
          },
          {
            zh: '获取手机网络状态',
            url: 'getNetworkType/index',
          },
          {
            zh: 'wifi 列表',
            url: 'getWifiList/index',
          },
          {
            zh: '获取当前连接的 wifi 信息',
            url: 'getConnectedWifi/index',
          },
        ],
      },
      {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
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
