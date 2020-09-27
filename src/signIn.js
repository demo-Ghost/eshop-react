import React, { useEffect, useState } from 'react';

import './styles/components/signIn.scss';

import services from './services';

console.log(services);

const SignIn = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const user = await services.getUser();

      return user;
    };

    getUser();
  }, [setUser]);

  return (
    <div className="yolo mb-4">
      ksjdjs
    </div>
  );
};

export default SignIn;