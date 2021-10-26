const initialState = {
  user: {},
  token: "",
  products: [],
  categories: [],
};

const reducers = (state = initialState, action) => {
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
      return { ...state, token: action.payload };
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default reducers;
