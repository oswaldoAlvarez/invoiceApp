import axios from "axios";

const BASIC_AUTH =
  "Basic " +
  (typeof window !== "undefined"
    ? window.btoa("WelComeToEst:GudLuck@2025")
    : Buffer.from("WelComeToEst:GudLuck@2025").toString("base64"));

export const axiosInstance = axios.create({
  baseURL: "https://estable.dev/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: BASIC_AUTH,
  },
});
