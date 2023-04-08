import axios from 'axios';


const baseUrl = process.env.REACT_APP_BACKEND_URL;


export const getRecruiters = () => {
  return axios.get(baseUrl + "/recruiters")
}

export const getRecruitersById = (id) => {
  return axios.get(baseUrl + "/recruiters/" + id)
}

export const createRecruiters = (data) => {
  return axios.post(baseUrl + "/recruiters", data)
}

export const updateRecruiters = (id, data) => {
  return axios.put(baseUrl + "/recruiters/" + id, data)
}

export const deleteRecruiters = (id) => {
  return axios.delete(baseUrl + "/recruiters/" + id)
}