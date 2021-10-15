import bootcampAxios from './lib/axios/bootcampAxios';

// eslint-disable-next-line import/prefer-default-export
export const signUpService = async (formData) => {
  return bootcampAxios.post( 'authorization/signup',formData
)

  
};