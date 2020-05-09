import axios from 'axios';

var api = {
  test(params) {
    return axios.post('/api/captcha',params)
  },
  register(params) {
    return axios.post('/api/user/register',params)
  }
}

export default api; 