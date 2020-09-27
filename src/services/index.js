import auth from './auth';
import user from './user';

console.log(auth, user);

export default {
  ...auth,
  ...user,
};
