import bootcampAxios from "../lib/axios/bootcampAxios";

export const getGivenOffers = async () => {
  return bootcampAxios.get("account/given-offers");
};
export const getReceivedOffers = async () => {
  return bootcampAxios.get("account/received-offers");
};
export const cancelOffer = async (id) => {
  return bootcampAxios.delete("account/cancel-offer/" + id);
};
export const acceptOffer = (id) => {
  return bootcampAxios.put("account/accept-offer/" + id);
};
export const rejectOffer = (id) => {
  return bootcampAxios.post("account/reject-offer/" + id);
};
