import React from 'react';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
