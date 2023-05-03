const axios = require("axios");
const BASE_HTTP_URL = "https://nest.skypostal.com";
const BASE_HTTP_PATH = "/shipment/async-shipment-search-single";

const http = axios.default.create({
  baseURL: BASE_HTTP_URL,
});

exports.request = async (data) => {
  return http.post(BASE_HTTP_PATH, data);
};
