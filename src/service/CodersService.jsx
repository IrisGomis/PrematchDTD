import axios from 'axios';


const baseUrl = import.meta.env.REACT_APP_BACKEND_URL;


export const getCoders = () => {
  return axios.get(baseUrl + "/coders")
}

export const getCodersById = (id) => {
  return axios.get(baseUrl + "/coders/" + id)
}

export const createCoders = (data) => {
  return axios.post(baseUrl + "/coders", data)
}

export const updateCoders = (id, data) => {
  return axios.put(baseUrl + "/coders/" + id, data)
}

export const deleteCoders = (id) => {
  return axios.delete(baseUrl + "/coders/" + id)
}