const initialState = {
    givenOffers:[],
    receivedOffers:[],
 
 }
 
 const accountReducer = (state = initialState, action) => {
  
    switch (action.type) {
  
             case 'SET_GIVEN_OFFERS':
                return {...state, givenOffers: action.payload};
                case 'SET_RECEIVED_OFFERS':
                    return {...state, receivedOffers: action.payload};
 
       default:
          return state;
    }
 }
 
 export default accountReducer;
 