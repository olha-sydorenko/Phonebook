import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const UserAPI = {
  async register(formData) {
    const { data } = await $publicHost.post(`users/signup`, formData);
    return data;
  },
  async login(formData) {
    const { data } = await $publicHost.post(`users/login`, formData);
    return data;
  },
};

// export const fetchContacts = async () => {
//   const { data } = await axios.get('/contacts');
//   return data;
// };

// export const postContact = async contact => {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// };

// export const removeContact = async id => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// };
