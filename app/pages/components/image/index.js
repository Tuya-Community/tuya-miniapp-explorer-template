Page({
  data: {
    array: [
      {
        mode: 'widthFix',
        text: 'widthFix：缩放模式，宽度不变，高度自动变化，保持原图宽高比不变',
        src: 'https://img1.baidu.com/it/u=989815067,4065937670&fm=26&fmt=auto',
      },
      {
        mode: 'heightFix',
        text: 'heightFix：缩放模式，高度不变，宽度自动变化，保持原图宽高比不变',
        src: 'https://img0.baidu.com/it/u=802898529,234887730&fm=15&fmt=auto',
      },
      {
        mode: 'scaleToFill',
        text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
        src: 'https://img1.baidu.com/it/u=409539705,858709430&fm=26&fmt=auto',
      },
      {
        mode: 'aspectFit',
        text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来',
        src: 'https://img1.baidu.com/it/u=3237586864,874636919&fm=26&fmt=auto',
      },
      {
        mode: 'aspectFill',
        text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来',
        src: 'https://img0.baidu.com/it/u=1868816884,3782068186&fm=26&fmt=auto',
      },
      {
        mode: 'top',
        text: 'top：不缩放图片，只显示图片的顶部区域',
        src: 'https://img2.baidu.com/it/u=123486287,1700584355&fm=26&fmt=auto',
      },
      {
        mode: 'bottom',
        text: 'bottom：不缩放图片，只显示图片的底部区域',
        src: 'https://img1.baidu.com/it/u=1677307154,4128866455&fm=26&fmt=auto',
      },
      {
        mode: 'center',
        text: 'center：不缩放图片，只显示图片的中间区域',
        src: 'https://img1.baidu.com/it/u=593629569,3400129487&fm=26&fmt=auto',
      },
      {
        mode: 'left',
        text: 'left：不缩放图片，只显示图片的左边区域',
        src: 'https://img2.baidu.com/it/u=2877536690,557986155&fm=26&fmt=auto',
      },
      {
        mode: 'right',
        text: 'right：不缩放图片，只显示图片的右边边区域',
        src: 'https://img1.baidu.com/it/u=1839170437,3551445342&fm=26&fmt=auto',
      },
      {
        mode: 'top left',
        text: 'top left：不缩放图片，只显示图片的左上边区域',
        src: 'https://img0.baidu.com/it/u=360985904,3279088223&fm=26&fmt=auto',
      },
      {
        mode: 'top right',
        text: 'top right：不缩放图片，只显示图片的右上边区域',
        src: 'https://img2.baidu.com/it/u=3232888568,2605123645&fm=26&fmt=auto',
      },
      {
        mode: 'bottom left',
        text: 'bottom left：不缩放图片，只显示图片的左下边区域',
        src: 'https://img0.baidu.com/it/u=2697702701,157157882&fm=26&fmt=auto',
      },
      {
        mode: 'bottom right',
        text: 'bottom right：不缩放图片，只显示图片的右下边区域',
        src: 'https://img1.baidu.com/it/u=617046273,3612374791&fm=26&fmt=auto',
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
