import axios from "axios";

import { DOMAIN_SERVER_API } from "@/config";

const axiosInstance = axios.create({
  baseURL: DOMAIN_SERVER_API,
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [(params) => JSON.stringify({ data: params })],
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export const _getApi = (url, data) =>
  axiosInstance.get(url, data).then((response) => response.data);

export const _postApi = (url, data, headers = {}) =>
  axiosInstance.post(url, data, headers).then((response) => response.data);

export const _putApi = (url, data) =>
  axiosInstance.put(url, data).then((response) => response.data);

export const _patchApi = (url, data) =>
  axiosInstance.patch(url, data).then((response) => response.data);

export const _deleteApi = (url) =>
  axiosInstance.delete(url).then((response) => response.data);

export default axiosInstance;
