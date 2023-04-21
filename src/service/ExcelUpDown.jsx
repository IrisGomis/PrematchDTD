import axios from 'axios';


const baseUrl = process.env.REACT_APP_BACKEND_URL;


export const getExcel = () => {
  return axios.get(baseUrl + "/excel")
}


export const createExcel = (data) => {
  return axios.post(baseUrl + "/excel", data)
}


