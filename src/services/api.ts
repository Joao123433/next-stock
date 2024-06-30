import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-react-stock.vercel.app/api"
})