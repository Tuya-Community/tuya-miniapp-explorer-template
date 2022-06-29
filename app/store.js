import reducer from './reducer/index'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


//创建redux store
export const store = createStore(
  reducer,
  applyMiddleware(
    logger,//用于控制台state调试
    thunkMiddleware//用于处理异步action
  )
)
