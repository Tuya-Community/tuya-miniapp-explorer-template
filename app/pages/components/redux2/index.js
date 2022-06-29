// //index.js
import { store } from '../../../store'
import { increase } from '../../../actions/index'

const { dispatch, subscribe, getState } = store

Page({
  data: {
    syncData: 'Hello World',
    number: '0',
  },
  onLoad: function () {
    const _this = this
    const {
      asyncData: { status },
      theIncreasingNo,
    } = getState()
    this.setData({
      number: theIncreasingNo,
    })
    subscribe(() => {
      _this.setData({
        syncData: `
          请求状态：${status},
          返回的数据请查看控制台
        `,
        number: theIncreasingNo,
      })
    })
  },
  testSyncAction: function () {
    //发出一个同步action
    dispatch(increase)
  },
})
