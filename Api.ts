import axios, { AxiosInstance } from "axios";

const baseURL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:9191/api/";

const server: AxiosInstance = axios.create({
  baseURL,
});

export default server;
