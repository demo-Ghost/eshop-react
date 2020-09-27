import React from 'react';

import SignIn from './signIn';


const App = ({ title }) => (
  <div className="text-primary">
    {title}
    <SignIn />
  </div>
);

export default App;