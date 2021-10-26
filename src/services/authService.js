import bootcampAxios from "../lib/axios/bootcampAxios";

export const signIn = async (formData) => {
  return bootcampAxios.post("authorization/signin", formData);
};

export const signUpService = async (formData) => {
  return bootcampAxios.post("authorization/signup", formData);
};
