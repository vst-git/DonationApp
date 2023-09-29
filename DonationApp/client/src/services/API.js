import axios from "axios";

const baseURL = `${window.location.protocol}`//${window.location.hostname}/api/v1;
const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
