import axios from 'axios';


const baseUrl = import.meta.env.REACT_APP_BACKEND_URL;



export const createMatches = (data) => {
    return axios.post(baseUrl + "/matches/recruiters", data)
  }

  export const createEvento = (data) => {
    return axios.post(baseUrl + "/matches/recruiters/detach", data)
  }