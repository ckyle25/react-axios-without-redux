import axios from 'axios';
import apiURL from '../api';

export const getCustomerList = () => {
  return axios.get(apiURL).then(res => res.data)
}

export const postCustomer = (obj) => {
  return axios.post(apiURL,obj).then(res => res.data)
}

export const getCustomer = (id) => {
  return axios.get(apiURL + id).then(res => res.data)
}
