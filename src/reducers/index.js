const initialState = {
  IUser: {
      email: '',
      password: ''
    },
   
  }

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_REQUEST':
      return { ...state, isFetching: true, user: {}, isError: false };
    case 'SIGN_UP_SUCCESS': {
      return {
        ...state,
        user: action.data,
      };
    }
    case 'SIGN_UP_FAILURE':
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
}
  
  export default reducers;