import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://sherif-chat-api-bvc3hvc8afa7a8ck.centralindia-01.azurewebsites.net/api",
  withCredentials: true,
});
