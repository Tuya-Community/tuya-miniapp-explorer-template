Page({
  data: {
    // icon: '',
    slideButtons: [
      {
        text: 'normal',
        // src: global.isDemo ? '' : '', // icon的路径
      },
      {
        text: 'normal',
        extClass: 'test',
        // src: global.isDemo ? '' : '', // icon的路径
      },
      {
        type: 'warn',
        text: 'warn',
        extClass: 'test',
        // src: global.isDemo ? '' : '', // icon的路径
      },
    ],
  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },
})
