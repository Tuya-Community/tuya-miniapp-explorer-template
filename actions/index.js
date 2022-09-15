//这是一个同步的action
export const INCREASE = 'INCREASE'

export const increase = {
  type: INCREASE,
}

export const addCountAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'GET_DATA' })
    }, 2000)
  }
}
