import axios from 'axios';

async function login() {
  await axios
    .get('/auth')
    .then((res) => console.log(res.data));
}

export default {
  login,
};
