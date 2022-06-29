Page({
  data: {
    // icon: '',
    slideButtons: [
      {
        text: '普通',
        // src: global.isDemo ? '' : '', // icon的路径
      },
      {
        text: '普通',
        extClass: 'test',
        // src: global.isDemo ? '' : '', // icon的路径
      },
      {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        // src: global.isDemo ? '' : '', // icon的路径
      },
    ],
  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },
})
