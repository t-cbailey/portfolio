import axios, { AxiosInstance } from "axios";

console.log(process.env.NODE_ENV);
const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:9191/api/"
    : "https://personal-portfolio-iiaz.onrender.com/api/";

const server: AxiosInstance = axios.create({
  baseURL,
});

export default server;
