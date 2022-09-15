Page({
  navigateTo() {
    ty.navigateTo({ url: 'pages/pageAPI/navigators/index' })
  },

  navigateBack() {
    ty.navigateBack()
  },

  redirectTo() {
    ty.redirectTo({ url: 'pages/pageAPI/navigators/index' })
  },

  switchTab() {
    ty.switchTab({ url: 'pages/components/index' })
  },

  reLaunch() {
    ty.tabBarTo({ url: 'pages/components/index' })
  },
})
