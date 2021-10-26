export const signInPendding = () => ({
    type: 'SIGN_IN_REQUEST',
  });

  export const signInSuccess = (payload) => ({
    type: 'SIGN_IN_SUCCESS',
    payload,
  });

  export const signInFailure = (payload) => ({
    type: 'SIGN_IN_FAILURE',
    payload,
  });

 
