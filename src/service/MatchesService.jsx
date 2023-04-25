import axios from 'axios';


const baseUrl = process.env.REACT_APP_BACKEND_URL;


export const getSearchMatch = () => {
  return axios.get(baseUrl + "/match/search")
}

export const getMatch = () => {
  return axios.get(baseUrl + "/match").then((response) => {
    return { data: response.data.matches };
  });
};

export const createMatch = (data) => {
  return axios.post(baseUrl + "/match", data)
}