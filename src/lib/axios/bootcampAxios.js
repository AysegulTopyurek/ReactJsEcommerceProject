import axios from "axios";

const bootcampAxios = axios.create({
  baseURL: "https://bootcampapi.techcs.io/api/fe/v1/",
  headers: {
    'Content-Type': 'application/json'
  } 
});

bootcampAxios.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) { 
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
//axiosta attığğım isteklerde loading catche düşmesin diye bunu kullanıyoruz

//  bootcampAxios.interceptors.response.use((response) => response, (error) => {
//    const dispatch=getDispatch();
//  dispatch(setIsLoading(false))
//    return Promise.reject(error);
//  });
export default bootcampAxios;