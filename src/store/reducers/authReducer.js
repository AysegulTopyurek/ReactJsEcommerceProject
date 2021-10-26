const initialState = {
  user: {},
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_REQUEST":
      return { ...state, isFetching: true, user: {}, isError: false };
    case "SIGN_UP_SUCCESS": {
      return {
        ...state,
        user: action.data,
      };
    }
    case "SIGN_UP_FAILURE":
      return { ...state, isError: true, isFetching: false };

    case "SIGN_IN_SUCCESS":
      return { ...state, token: action.payload, user: action.data };
    default:
      return state;
  }
};

export default authReducer;
