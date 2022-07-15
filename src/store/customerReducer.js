const defaultState = {
  customer: []
}

const reducerCustomer = (state = defaultState, action) => {
  switch (state.type) {
    case 'ADD_CUSTOMER':
      return {...state, cash: state.cash + action.payload}
    case 'GET_ADD_CUSTOMER':
      return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
}
