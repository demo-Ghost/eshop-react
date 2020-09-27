import axios from './axios';

async function getUser() {
  await axios
    .get('/users')
    .then((res) => console.log(res.data));
};

export default {
  getUser,
};