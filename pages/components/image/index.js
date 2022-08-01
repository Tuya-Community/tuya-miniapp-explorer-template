Page({
  data: {
    array: [
      {
        mode: 'widthFix',
        text: 'widthFix：缩放模式，宽度不变，高度自动变化，保持原图宽高比不变',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'heightFix',
        text: 'heightFix：缩放模式，高度不变，宽度自动变化，保持原图宽高比不变',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'scaleToFill',
        text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'aspectFit',
        text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'aspectFill',
        text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'top',
        text: 'top：不缩放图片，只显示图片的顶部区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'bottom',
        text: 'bottom：不缩放图片，只显示图片的底部区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'center',
        text: 'center：不缩放图片，只显示图片的中间区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'left',
        text: 'left：不缩放图片，只显示图片的左边区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'right',
        text: 'right：不缩放图片，只显示图片的右边边区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'top left',
        text: 'top left：不缩放图片，只显示图片的左上边区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'top right',
        text: 'top right：不缩放图片，只显示图片的右上边区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'bottom left',
        text: 'bottom left：不缩放图片，只显示图片的左下边区域',
        src: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/images/home/support1.jpg',
      },
      {
        mode: 'bottom right',
        text: 'bottom right：不缩放图片，只显示图片的右下边区域',
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
