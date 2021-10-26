import bootcampAxios from "../lib/axios/bootcampAxios";

export const uploadImage = async (formData) => {
  return bootcampAxios.post("file/upload/image", formData, {
    "Content-Type": "multipart/form-data",
  });
};
