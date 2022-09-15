const markers = [
  {
    id: 1,
    latitude: 39.908775,
    longitude: 116.406315,
    name: '王府井',
    iconPath: '/assets/images/marker.png',
    callout: {
      content: '王府井',
      color: '#ffffff',
      fontSize: 12,
      bgColor: '#5C91F6',
      padding: 4,
      borderRadius: 35,
      anchorY: -8,
    },
  },
  {
    id: 2,
    latitude: 39.927761,
    longitude: 116.391467,
    name: '北海公园',
    iconPath: '/assets/images/marker.png',
    callout: {
      content: '北海公园',
      color: '#ff0000',
      fontSize: 12,
      bgColor: '#fff',
      padding: 4,
      borderRadius: 35,
      anchorY: -8,
    },
  },
  {
    id: 3,
    latitude: 39.918203,
    longitude: 116.396923,
    name: '故宫',
    iconPath: '/assets/images/marker.png',
    callout: {
      content: '故宫',
      color: '#ffffff',
      fontSize: 12,
      bgColor: '#5C91F6',
      padding: 4,
      borderRadius: 35,
      anchorY: -8,
    },
  },
]

Page({
  data: {
    latitude: 39.908775,
    longitude: 116.406315,
    scale: 12,
    markers: markers.slice(0, 2),
    tagTop: 20,
    height: 40,
    isShow: false,
    showDialog: false,
    buttons: [
      {
        text: '取消',
      },
      {
        text: '确定',
      },
    ],
    marginTop: 10,
    value: 10,
  },
  onReady: function () {
    this.mapCtx = ty.createMapContext('myMap')
  },
  openConfirm: function () {
    ty.nativeDisabled(true)
    this.setData({
      dialogShow: true,
      value: this.data.value + 10,
    })
  },
  changeLngLat: function (e) {
    if (this.data.latitude === 39.908775) {
      this.setData({
        latitude: 39.97334,
        longitude: 116.417403,
      })
    } else {
      this.setData({
        latitude: 39.908775,
        longitude: 116.406315,
      })
    }
  },
  scaleIn: function () {
    this.setData({
      scale: this.data.scale + 1,
    })
  },
  scaleOut: function () {
    this.setData({
      scale: this.data.scale - 1,
    })
  },
  changeMarkers: function () {
    this.setData({
      markers: markers,
    })
  },
  apiAddMarkers: function () {
    this.mapCtx.addMarkers({
      markers: [markers[2]],
      clear: false,
      success: (res) => {
        console.log('success addMarkers', res)
      },
    })
  },
  apiRemoveMarkers: function () {
    this.mapCtx.removeMarkers({
      markerIds: [1, 2, 3],
      success: (res) => {
        console.log('success removeMarkers', res)
      },
    })
  },
  apiMoveToLocation: function (e) {
    this.mapCtx.moveToLocation({
      longitude: '121.138398',
      latitude: '30.972688',
      success: (res) => {
        console.log('demo moveToLocation success 回调函数触发', res)
      },
    })
  },
  clickTag: function (e) {
    console.log('demo 热区标签 tap 事件触发', e)
  },
  handleMarkertap: function (e) {
    console.log('demo 地图 markertap 事件触发', e)
  },
  handleCallouttap: function (e) {
    console.log('demo 地图 callouttap 事件触发', e)
  },
  handleRegionchange: function (e) {
    console.log(e)
  },
  tapDialogButton(e) {
    ty.nativeDisabled(false)
    this.setData({
      dialogShow: false,
    })
  },
})
