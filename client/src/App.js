import React from 'react';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import EntryDetails from './components/EntryDetails/EntryDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' exact component={() => <Redirect to='/auth' />} />
        <Route path='/entries' exact component={Home} /> */}

        <Route
          path='/auth'
          exact
          component={() => (!user ? <Auth /> : <Redirect to='/entries' />)}
        />
        <Route path='/' exact component={() => <Redirect to='/entries' />} />
        <Route path='/entries' exact component={Home} />
        <Route path='/entries/:id' component={EntryDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
