import Axios from 'axios';
import Cookies from 'js-cookie';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

export const getSearch = async(query) => {
  let data
  let params = {
    search: query,
    auth_token: Cookies.get('authToken')
  }
  try {
    let res = await axios.get('/api/v1/cocktails/search', {params: params})
    data = res.data.data
  } catch (err){
    data = []
  }
  return data;
}