import axios from "axios";

const API_URL = "http://localhost:9999";

const api = axios.create({
  baseURL: API_URL,
});

export const authService = {
  login: async (username, password) => {
    const response = await api.get(`/users?username=${username}&password=${password}`);
    return response.data[0];
  }
};

export default api;
