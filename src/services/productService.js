import bootcampAxios from "../lib/axios/bootcampAxios";
export const getAllProducts = async () => {
  return bootcampAxios.get("product/all");
};
export const sendOffer = (id, offeredPrice) => {
  return bootcampAxios.post(`product/offer/${id}`, {
    offeredPrice: offeredPrice,
  });
};

export const purchaseProduct = (id) => {
  return bootcampAxios.put("product/purchase/" + id);
};

export const addProduct = (product) => {
  return bootcampAxios.post("product/create", product);
};

export const getColor = () => {
  return bootcampAxios.get("detail/color/all");
};

export const getBrand = () => {
  return bootcampAxios.get("detail/brand/all");
};
export const getStatus = () => {
  return bootcampAxios.get("detail/status/all");
};
export const getCategory = () => {
  return bootcampAxios.get("detail/category/all");
};
