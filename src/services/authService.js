import bootcampAxios from '../lib/axios/bootcampAxios';

// eslint-disable-next-line import/prefer-default-export
export const signIn = async (formData) => {
  return bootcampAxios.post( 'authorization/signin',formData
)
  
};
