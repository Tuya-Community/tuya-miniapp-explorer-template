Page({
  data: {
    isSetTabBarPage: false,
    list: [
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '标题栏加载动画',
            url: 'navigationBarLoading/index',
          },
          {
            zh: '设置TabBar',
            url: '@set-tab-bar',
          },
          {
            zh: '页面跳转',
            url: 'navigators/index',
          },
          {
            zh: '显示操作菜单',
            url: 'actionSheet/index',
          },
          {
            zh: '显示模态弹窗',
            url: 'modal/index',
          },
          {
            zh: '显示消息提示框',
            url: 'toast/index',
          },
        ],
      },
      {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          // {
          //   zh: '获取手机网络状态',
          //   url: 'getNetworkType/index',
          // },
          {
            zh: '获取手机系统信息',
            url: 'getSystemInfo/index',
          },
          // {
          //   zh: '获取手机设备电量',
          //   url: 'getBatteryInfo/index',
          // },
          {
            zh: '打电话',
            url: 'makePhoneCall/index',
          },
          // {
          //   zh: '扫码',
          //   url: 'scanCode/index',
          // },
          {
            zh: '剪切板',
            url: 'clipboardData/index',
          },
          // {
          //   zh: '屏幕亮度',
          //   url: 'screenBrightness/index',
          // },
          // {
          //   zh: '振动',
          //   url: 'vibrate/index',
          // },
          // {
          //   zh: '手机联系人',
          //   url: 'addContact/index',
          // },
        ],
      },
      // {
      //   id: 'network',
      //   name: '网络',
      //   open: false,
      //   pages: [
      //     {
      //       zh: '发起一个请求',
      //       url: 'networkRequest/index',
      //     },
      //     {
      //       zh: '上传文件',
      //       url: 'uploadFile/index',
      //     },
      //     {
      //       zh: '下载文件',
      //       url: 'downloadFile/index',
      //     },
      //   ],
      // },
      // {
      //   id: 'media',
      //   name: '媒体',
      //   open: false,
      //   pages: [
      //     {
      //       zh: '图片',
      //       url: 'images/index',
      //     },
      //     {
      //       zh: '音频',
      //       url: 'audio/index',
      //     },
      //     {
      //       zh: '录音',
      //       url: 'voice/index',
      //     },
      //   ],
      // },
      // {
      //   id: 'location',
      //   name: '位置',
      //   open: false,
      //   pages: [
      //     {
      //       zh: '获取当前位置',
      //       url: 'getLocation/index',
      //     },
      //   ],
      // },
      {
        id: 'storage',
        name: '数据',
        pages: [
          {
            zh: '本地存储',
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
            url: 'pages/pageAPI/' + list[i].url,
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
      text: '窗口',
      iconPath: '/assets/images/tab/component.png',
      selectedIconPath: '/assets/images/tab/component_selected.png',
    })
  },
})
