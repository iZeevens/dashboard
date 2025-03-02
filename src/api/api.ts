import axios from "axios";

const BASE_URL = "http://localhost:3100";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const getSites = () => apiClient.get(`/sites`);
const getSitesById = (id: string) => apiClient.get(`/sites/${id}`);
const getTests = () => apiClient.get(`/tests`);
const getTestsById = (id: string) => apiClient.get(`/tests/${id}`);

export { getSites, getSitesById, getTests, getTestsById };
