import { combineReducers } from "redux"

//这是处理本例子中同步action的reducer
export const disposeIncrease = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    default:
      return state
  }
}

//这是处理本例中异步的reducer
const preState = {
  state: 0,
  status: '未请求'
}
export const disposeFetch = (state = preState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        status: '请求成功'
      }
    default:
      return state
  }
}

//按照state的结构组合起来
export default combineReducers({
  theIncreasingNo: disposeIncrease,
  asyncData: disposeFetch
})
