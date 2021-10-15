import axios from "axios";

const bootcampAxios = axios.create({
  baseURL: "http://bootcampapi.techcs.io/api/fe/v1/",
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



export default bootcampAxios;