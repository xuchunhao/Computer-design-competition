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
  }
}

export default api; 