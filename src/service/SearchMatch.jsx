import axios from 'axios';


const baseUrl = process.env.REACT_APP_BACKEND_URL;


export const getSearchMatch = () => {
  return axios.get(baseUrl + "/match/search")
}


export const createSearchMatch = (data) => {
  return axios.post(baseUrl + "/match/search", data)
}


