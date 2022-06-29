const texts = [
  '涂鸦智能（NYSE: TUYA）',
  '是全球领先的 IoT 云平台, ',
  '连接品牌、OEM 厂商、开发者',
  '和连锁零售商的智能化需求, ',
  '提供一站式人工智能物联网的 PaaS 级解决方案。',
  '并且涵盖了硬件开发工具、',
  '全球云、智慧商业平台开发三方面, ',
  '提供从技术到营销渠道的全面生态赋能, ',
  '打造世界领先的 IoT 云平台。',
  '涂鸦 IoT 开发平台累计有超过32.4万注册开发者, ',
  '日语音 AI 交互超1.22亿次, ',
  '每日设备请求次数840亿次',
  '......',
]

Page({
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text',
    }
  },

  data: {
    text: '',
    canAdd: true,
    canRemove: false,
  },
  extraLine: [],

  add() {
    this.extraLine.push(texts[this.extraLine.length % 12])
    let canAdd = this.extraLine.length < 12
    this.setData({
      text: this.extraLine.join('     '),
      canAdd: canAdd,
      canRemove: this.extraLine.length > 0,
    })
  },
  remove() {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('     '),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0,
      })
    }
  },
})

/* Page({
  data: {
    insertContent: '测试text标签插入变量',
    userSelect: true,
    testSpaceContent: '测试space'
  },
  onShow: function () {
      console.log('show', this.data.userSelect)
      setTimeout(() => {
        this.setData({
          userSelect: false
        })
        console.log('setData', this.data.userSelect)
      }, 2000)
  },
  handleTap () {
    console.log('tap')
  },
  handleTouchStart () {
    console.log('touch start')
  }
}) */
