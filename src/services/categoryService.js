import bootcampAxios from "../lib/axios/bootcampAxios";

export const getAllCategories = async () => {
  return bootcampAxios.get("detail/category/all");
};
