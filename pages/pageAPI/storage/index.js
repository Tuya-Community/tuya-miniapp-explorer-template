Page({
  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true,
    },
  },

  keyChange(e) {
    this.data.key = e.detail.value
  },

  dataChange(e) {
    this.data.data = e.detail.value
  },

  getStorage() {
    const { key, data } = this.data
    let that = this

    if (key.length === 0) {
      this.setData({
        key,
        data,
      })
      ty.showModal({
        title: '读取数据失败',
        content: 'key 不能为空',
        confirmText: '确定',
        cancelText: '取消',
      })
    } else {
      ty.getStorage({
        key,
        success: function (storageData) {
          console.log('getStorage ======== success', JSON.stringify(storageData))
          if (storageData === '') {
            that.setData({
              key,
              data: '',
            })
            ty.showModal({
              title: '读取数据失败',
              content: '找不到 key 对应的数据',
              confirmText: '确定',
              cancelText: '取消',
            })
          } else {
            that.setData(
              {
                key,
                data: storageData.data,
              },
              () => {
                console.log('storageData.data ======', that.data)
              }
            )
            ty.showModal({
              title: '读取数据成功',
              content: storageData.data,
              confirmText: '确定',
              cancelText: '取消',
            })
          }
        },
        fail: function (storageData) {
          console.log('getStorage ======== fail', storageData)
        },
      })
    }
  },

  setStorage() {
    const { key, data } = this.data
    let that = this
    if (key.length === 0) {
      that.setData({
        key,
        data,
      })
      ty.showModal({
        title: '保存数据失败',
        content: 'key 不能为空',
        confirmText: '确定',
        cancelText: '取消',
      })
    } else {
      ty.setStorage({
        key,
        data,
        success: function (res) {
          console.log(`setStorage ====== success`, res)
          that.setData({
            key,
            data,
          })
        },
        fail: function (res) {
          console.log(`setStorage ===== fail`, res)
        },
      })
      ty.showModal({
        title: '存储数据成功',
        confirmText: '确定',
        cancelText: '取消',
      })
    }
  },

  clearStorage() {
    let that = this
    const { key } = this.data
    ty.removeStorage({
      key,
      success: function (res) {
        console.log(`removeStorage ======`, res)
        that.setData({
          key: '',
          data: '',
        })
        ty.showModal({
          title: '清除数据成功',
          confirmText: '确定',
          cancelText: '取消',
        })
      },
    })

    // ty.clearStorage({
    //   success: function (clearStorage) {
    //     console.log(`clearStorage =======`, clearStorage)
    //     that.setData({
    //       key: '',
    //       data: '',
    //     })
    //   },
    // })
  },
})
