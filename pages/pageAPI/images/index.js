const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    // sourceType: ['拍照', '相册', '拍照或相册'],
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    // sizeType: ['压缩', '原图', '压缩或原图'],
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value,
    })
  },
  sizeTypeChange(e) {
    this.setData({
      sizeTypeIndex: e.detail.value,
    })
  },
  countChange(e) {
    this.setData({
      countIndex: e.detail.value,
    })
  },
  chooseImage() {
    const that = this
    ty.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log('chooseImage ====== success', res)
        that.setData({
          imageList: res.tempFilePaths,
        })
      },
      fail(res) {
        console.log('chooseImage ====== fail', res)
      },
    })
  },
  previewImage(e) {
    const current = e.target.dataset.src

    console.log(`current =====`, current)
    ty.previewImage({
      current,
      urls: this.data.imageList,
      fail(res) {
        console.log('previewImage ====== fail', res)
      },
      success(res) {
        console.log('previewImage ====== success', res)
      },
    })
  },
})
