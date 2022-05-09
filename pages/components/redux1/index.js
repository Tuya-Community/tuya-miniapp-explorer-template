import { store } from '../../../store'
import { increase, addCountAsync } from '../../../actions/index'

const { dispatch, subscribe, getState } = store
Page({
  data: {
    syncData: '异步请求状态：未请求',
    number: '0',
  },
  onReady: function () {
    const _this = this
    subscribe(() => {
      const {
        asyncData: { status },
        theIncreasingNo,
      } = getState()
      _this.setData({
        syncData: `异步请求状态：${status}`,
        number: theIncreasingNo,
      })
    })
  },

  testSyncAction: function () {
    dispatch(increase)
  },

  testAsyncAction: function () {
    dispatch(addCountAsync())
  },

  testSelectComponent: function () {
    let xlCom = this.selectComponent('#xl')
    xlCom.click()
  },

  // click: function () {
  //   ty.navigateTo({
  //     url: 'pages/xl2/index',
  //     events: {
  //       someEvent: function () {

  //       }
  //     },
  //     success: function () {

  //     }
  //   })
  // }
})
