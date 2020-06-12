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
  },
  infoSearch(params){
    return axios.post('/api/basicInfo/show',params)
  },
  infoChange(params){
    return axios.post('/api/info/modify',params)
  },
  loadimg(params){
    return axios.post('/api/load_img',params)
  },
  upimg(params){
    return axios.post('/api/up_img',params)
  },
  demandsList(params){
    return axios.post('/api/demandslist',params)
  },
  demandsRelease(params){
    return axios.post('/api/demands/release', params)
  },
  blogid(params){
    return axios.post('/api/blogid', params)
  },
  demandid(params){
    return axios.post('/api/demandid', params)
  },
  blogsinfo(params){
    return axios.post('/api/blogsinfo', params)
  },
  demandsinfo(params){
    return axios.post('/api/demandsinfo', params)
  },
  updateRelease(params){
    return axios.post('/api/updates/release', params)
  },
  updateList(params){
    return axios.post('/api/updatelist', params)
  },
  getinfo(params){
    return axios.post('/api/getinfo', params)
  },
  getcmt(params){
    return axios.post('/api/getcmt', params)
  },
  blogcmt(params){
    return axios.post('/api/blogcmt', params)
  },
  star(params){
    return axios.post('/api/star', params)
  },
  follow(params){
    return axios.post('/api/followed-follower', params)
  },
  getFollow(params){
    return axios.post('/api/getfollows', params)
  },
  getmsgList(params){
    return axios.post('/api/getmsglist',params)
  },
  getaddinfo(params){
    return axios.post('/api/getaddinfo', params)
  },
  addinfo(params){
    return axios.post('/api/add_info',params)
  },
  sendmsg(params){
    return axios.post('/api/sendmsg', params)
  },
  getmsg(params){
    return axios.post('/api/getmsg', params)
  },
  invite(params){
    return axios.post('/api/invite', params)
  },
  lastestmsg(params){
    return axios.post('/api/lastestmsg', params)
  },
  usersearch(params){
    return axios.post('/api/usersearch',params)
  },
  teamint(params){
    return axios.post('/api/teamint',params)
  },
  searchdem(params){
    return axios.post('/api/searchdem',params)
  },
}

export default api; 