import auth from './auth.service';
import user from './user.config';

export default {
  ...auth,
  ...user,
};
