import axios from "axios";

const API_URL = "https://chat-compass-default-rtdb.europe-west1.firebasedatabase.app/";

export const axiosApi = axios.create({
  baseURL: API_URL,
});
