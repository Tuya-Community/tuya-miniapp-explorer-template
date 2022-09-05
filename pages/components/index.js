Page({
  data: {
    tabs: [{ title: '基础组件' }, { title: '扩展组件' }],
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: [
          { path: 'view', title: 'view' },
          { path: 'scrollView', title: 'scroll-view' },
          { path: 'swiper', title: 'swiper' },
          { path: 'movable', title: 'movable' },
          { path: 'pagecontainer', title: 'page-container' },
          { path: 'svg', title: 'svg' },
        ],
      },
      {
        id: 'content',
        name: '基础内容',
        pages: [
          { path: 'text', title: 'text' },
          { path: 'icon', title: 'icon' },
          { path: 'richText', title: 'rich-text' },
          { path: 'progress', title: 'progress' },
        ],
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: [
          { path: 'button', title: 'button' },
          { path: 'switch', title: 'switch' },
          { path: 'checkbox', title: 'checkbox' },
          { path: 'radio', title: 'radio' },
          { path: 'form', title: 'form' },
          { path: 'input', title: 'input' },
          { path: 'label', title: 'label' },
          { path: 'picker', title: 'picker' },
          { path: 'pickerview', title: 'picker-view' },
          { path: 'textarea', title: 'textarea' },
          { path: 'slider', title: 'slider' },
        ],
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: [{ path: 'navigator', title: 'navigator' }],
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: [
          { path: 'camera', title: 'camera' },
          { path: 'image', title: 'image' },
          { path: 'ipc-player', title: 'ipc-player' },
          { path: 'video', title: 'video' },
        ],
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: [{ path: 'map', title: 'map' }],
      },
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: [
          { path: 'canvas', title: 'canvas' },
          { path: 'canvasDemo/column', title: '图表' },
          { path: 'canvasDemo/imageData', title: 'imageData & Path2D' },
          { path: 'canvasDemo/lottie', title: 'lottie' },
          { path: 'canvasDemo/rect', title: 'rect' },
          { path: 'canvasDemo/circle', title: 'circle' },
          { path: 'canvasDemo/polygon', title: 'polygon' },
          { path: 'canvasDemo/line', title: 'line' },
          { path: 'canvasDemo/cshape', title: 'cshape' },
          { path: 'canvasDemo/ellipse', title: 'ellipse' },
          { path: 'canvasDemo/canvasText', title: 'text' },
          { path: 'canvasDemo/img', title: 'image' },
          { path: 'canvasDemo/all', title: 'all' },
          { path: 'canvasDemo/demo1', title: 'animate1' },
          { path: 'canvasDemo/demo2', title: 'animate2' },
          { path: 'canvasDemo/demo3', title: 'animate3' },
          { path: 'canvasDemo/demo4', title: 'animate4' },
          { path: 'canvasDemo/demo5', title: 'animate5' },
        ],
      },
      {
        id: 'animation',
        name: 'JSAPI',
        open: false,
        pages: [
          { path: 'animation', title: 'animation' },
          { path: 'io', title: 'intersectionObserver' },
          { path: 'redux1', title: 'redux & selectComponent' },
          // { path: 'eventChannel1', title: 'eventChannel' },
        ],
      },
    ],
  },
  kindToggle: function (e) {
    const id = e.currentTarget.dataset.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list,
    })
  },
  onPullDownRefresh() {
    console.log('demo onPullDownRefresh 触发执行')
  },
  onLoad(opt) {
    console.warn('onLoad', this, opt)
  },
  onShow(opt) {
    console.warn('onShow', this, opt)
  },
  onReady(opt) {
    console.warn('onReady', this, opt)
  },
})
