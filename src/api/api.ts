import axios from "axios";

const BASE_URL = "http://localhost:3100";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const getSites = () => apiClient.get(`/sites`);
const getSitesById = (id: number) => apiClient.get(`/sites/${id}`);
const getTests = () => apiClient.get(`/tests`);
const getTestsById = (id: number) => apiClient.get(`/tests/${id}`);

export { getSites, getSitesById, getTests, getTestsById };
