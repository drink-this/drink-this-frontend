import Axios from 'axios';
import Cookies from 'js-cookie';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

export const getSearch = async(query) => {
  let params = {
    search: query,
    auth_token: Cookies.get('authToken')
  }
  let {data} = await axios.get('/api/v1/cocktails/search', {params: params});
  return data.data;
}