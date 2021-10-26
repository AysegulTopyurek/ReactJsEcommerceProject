const initialState = {
  products: [],
  colors: [],
  brands: [],
  situations: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload }; //bence spread lazım

    default:
      return state;
  }
};

export default productReducer;
