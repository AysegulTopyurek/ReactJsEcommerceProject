import { signInService } from '../services/authService';

const signInPendding = () => ({
    type: 'SIGN_IN_REQUEST',
  });

  const signInSuccess = (payload) => ({
    type: 'SIGN_IN_SUCCESS',
    payload,
  });
  
  const signInFailure = (payload) => ({
    type: 'SIGN_IN_FAILURE',
    payload,
  });
  
  const signInAction = (formdata) => async (dispatch) => {
    dispatch(signInPendding());
    try {
      const response = await signInService(formdata);
      dispatch(signInSuccess(response.data));
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  
  export default signInAction;