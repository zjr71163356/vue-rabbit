import axios from "axios";
const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";
const HttpInstance = axios.create({ baseURL: baseURL, timeout: 5000 });
HttpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);
HttpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => Promise.reject(e)
);

export default HttpInstance;
