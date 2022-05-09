import ToolKit from '@tuya-miniapp/miniapp-tool-kit'

Page({
  data: {
    fontSize: 'T6-f',
    fontColor: 'B1-N1',
    bgColor: 'B3_2-N2',
    borderRadius: 'C1_2',
    currentTheme: 'light',
  },
  changeFontSize(e) {
    const input = (e.detail?.value || '').toUpperCase()
    this.setData({
      fontSize: input,
    })
  },
  changeFontColor(e) {
    const input = e.detail?.value
    this.setData({
      fontColor: input.toUpperCase(),
    })
  },
  changeBgColor(e) {
    const input = (e.detail?.value || '').toUpperCase()

    this.setData({
      bgColor: input,
      currentTheme: ToolKit.Theme.isDark(`--tyui-${input}`) ? 'dark' : 'light',
    })
  },
  changeBorderRadius(e) {
    const input = (e.detail?.value || '').toUpperCase()
    this.setData({
      borderRadius: input,
    })
  },
})
