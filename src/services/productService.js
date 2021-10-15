import bootcampAxios from '../lib/axios/bootcampAxios';

// eslint-disable-next-line import/prefer-default-export
export const getAllProducts = async () => {
  return bootcampAxios.get( 'product/all')

  
};