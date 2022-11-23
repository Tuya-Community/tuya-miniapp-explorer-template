Page({
  data: {
    array: [
      {
        mode: 'widthFix',
        text: i18n.t('img_text1'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'heightFix',
        text: i18n.t('img_text2'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'scaleToFill',
        text: i18n.t('img_text3'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'aspectFit',
        text: i18n.t('img_text4'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'aspectFill',
        text: i18n.t('img_text5'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'top',
        text: i18n.t('img_text6'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'bottom',
        text: i18n.t('img_text7'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'center',
        text: i18n.t('img_text8'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'left',
        text: i18n.t('img_text9'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'right',
        text: i18n.t('img_text10'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'top left',
        text: i18n.t('img_text11'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'top right',
        text: i18n.t('img_text12'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'bottom left',
        text: i18n.t('img_text13'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'bottom right',
        text: i18n.t('img_text14'),
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
    ],
    // src: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    src: '/assets/images/godzilla.png',
  },
  load: function (event) {
    console.log('demo image load', event.detail, event)
  },
  error: function (event) {
    console.log('demo image error', event.detail, event)
  },
})
