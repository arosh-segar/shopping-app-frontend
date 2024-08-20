import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://shopping-app-backend-habfggbvfxgae2cg.southindia-01.azurewebsites.net/api/book", // replace with your backend URL
  timeout: 1000,
});

export default axiosInstance;
