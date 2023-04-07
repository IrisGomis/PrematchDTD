import axios from 'axios';

const baseUrl = import.meta.env.BACKEND_URL

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