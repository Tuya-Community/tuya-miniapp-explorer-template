Page({
    data: {
        tabs: [{ title: i18n.t('base_component') }, { title: i18n.t('extend_component') }],
        list: [{
                id: 'view',
                name: i18n.t('view_content'),
                open: false,
                pages: [
                    { path: 'view', title: 'view' },
                    { path: 'scrollView', title: 'scroll-view' },
                    { path: 'swiper', title: 'swiper' },
                    { path: 'movable', title: 'movable' },
                    { path: 'pagecontainer', title: 'page-container' },
                ],
            },
            {
                id: 'content',
                name: i18n.t('base_content'),
                pages: [
                    { path: 'text', title: 'text' },
                    { path: 'icon', title: 'icon' },
                    { path: 'richText', title: 'rich-text' },
                    { path: 'progress', title: 'progress' },
                ],
            },
            {
                id: 'form',
                name: i18n.t('form_content'),
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
                name: i18n.t('nav_content'),
                open: false,
                pages: [{ path: 'navigator', title: 'navigator' }],
            },
            {
                id: 'media',
                name: i18n.t('media_content'),
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
                name: i18n.t('map_content'),
                open: false,
                pages: [{ path: 'map', title: 'map' }],
            },
            {
                id: 'canvas',
                name: i18n.t('pic_content'),
                open: false,
                pages: [
                    { path: 'canvas', title: 'canvas' },
                    { path: 'canvasDemo/column', title: 'chart' },
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
        list2: [{
                id: 'option',
                name: i18n.t('map_content'),
                open: false,
                pages: ['actionSheetEx', 'dialog', 'halfScreenDialog', 'msg', 'topTips', 'searchbar'],
            },
            {
                id: 'base',
                name: '基础组件',
                open: false,
                pages: [
                    'gallery',
                    'flex',
                    'footer',
                    'badge',
                    'iconEx',
                    'loading',
                    'tabbar',
                    'navigationBarEx',
                    'selectText',
                    'drag',
                    'tabs',
                    'vtabs',
                    'vlist',
                    'grid',
                ],
            },
            {
                id: 'form',
                name: i18n.t('form_content'),
                open: false,
                pages: ['cell', 'checkboxEx', 'formpage', 'formEx', 'slideview', 'recycleview'],
            },
            {
                id: 'gesture',
                name: i18n.t('gesture_content'),
                open: false,
                pages: ['gesture'],
            },
        ],
    },
    kindToggle: function(e) {
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
    kindToggle2: function(e) {
        const id = e.currentTarget.dataset.id
        const list = this.data.list2
        for (let i = 0, len = list.length; i < len; ++i) {
            if (list[i].id === id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list2: list,
        })
    },
    onPullDownRefresh() {
        console.log('trigger onPullDownRefresh')
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