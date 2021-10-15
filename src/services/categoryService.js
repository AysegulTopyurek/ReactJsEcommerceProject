import bootcampAxios from '../lib/axios/bootcampAxios';

// eslint-disable-next-line import/prefer-default-export
export const getAllCategories = async () => {
  return bootcampAxios.get( 'detail/category/all')

  
};