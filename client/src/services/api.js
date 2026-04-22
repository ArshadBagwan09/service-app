import axios from "axios";

const API = axios.create({
  baseURL: "http://172.22.200.59:5000/api"
});

export default API;