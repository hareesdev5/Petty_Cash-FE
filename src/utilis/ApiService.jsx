import axios from "axios";

const VITE_API_URL = "https://petty-cash-be.onrender.com";

const AxiosService = axios.create({
  baseURL: `${VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosService.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

AxiosService.interceptors.request.use(config=>{
  const token = sessionStorage.getItem('token')
  if(token)
    config.headers.Authorization = `Bearer ${token}`
  return config
})

export default AxiosService;
