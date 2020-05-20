import axios from 'axios';

var api = {
  test(params) {
    return axios.post('/api/captcha',params)
  },
  register(params) {
    return axios.post('/api/register',params)
  },
  login(params) {
    return axios.post('/api/login',params)
  },
  blogSearch(params){
    return axios.post('/api/blog/search',params)
  },
  blogRelease(params){
    return axios.post('/api/blog/release',params)
  }
}

export default api; 