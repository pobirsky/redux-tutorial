const defaultState = {
  cash: 5,
}

const reducer = (state = defaultState, action) => {
  switch (state.type) {
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
}
