import axios from 'axios';


const baseUrl = process.env.REACT_APP_BACKEND_URL;


export const getsearch = () => {
  return axios.get(baseUrl + "/search")
}

export const getsearchById = (id) => {
  return axios.get(baseUrl + "/search/" + id)
}

export const createsearch = (data) => {
  return axios.post(baseUrl + "/search", data)
}

export const updatesearch = (id, data) => {
  return axios.put(baseUrl + "/search/" + id, data)
}

export const deletesearch = (id) => {
  return axios.delete(baseUrl + "/search/" + id)
}