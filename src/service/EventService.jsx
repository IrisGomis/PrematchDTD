import axios, { useContext } from 'axios';
import { UserContext } from '../context/UserContext';

// const baseUrl = import.meta.env.REACT_APP_BACKEND_URL;
const { baseUrl } = useContext(UserContext);

export const getEvento = () => {
  return axios.get(baseUrl + "/categories")
}

export const getEventoById = (id) => {
  return axios.get(baseUrl + "/events/" + id)
}

export const createEvento = (data) => {
  return axios.post(baseUrl + "/events", data)
}

export const updateCategory = (id, data) => {
  return axios.put(baseUrl + "/events/" + id, data)
}

export const deleteCategory = (id) => {
  return axios.delete(baseUrl + "/events/" + id)
}