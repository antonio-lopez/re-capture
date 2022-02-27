import React from 'react';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const history = useHistory();

  const login = () => {
    history.push('/auth');
  };
  return (
    <>
      <div>Main Component</div>
      <button onClick={login}>Sign In</button>
    </>
  );
};

export default Main;
