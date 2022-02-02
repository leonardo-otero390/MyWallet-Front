import axios from "axios";

const BASE_URL = "http://localhost:4000"
const axiosBase = axios.create({
  baseURL: BASE_URL,
});
export default axiosBase;