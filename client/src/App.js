import React from 'react';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import EntryDetails from './components/EntryDetails/EntryDetails';
import CreateEntry from './components/CreateEntry/CreateEntry';
import UpdateEntry from './components/UpdateEntry/UpdateEntry';
import Main from './components/Main/Main';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route
          exact
          path='/auth'
          component={() => (!user ? <Auth /> : <Redirect to='/entries' />)}
        />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/entries' component={Home} />
        <Route exact path='/entries/:id' component={EntryDetails} />
        <Route exact path='/createentry' component={CreateEntry} />
        <Route exact path='/editentry/:id' component={UpdateEntry} />
        {/* add a catch all 404 page to sign in
          https://stackoverflow.com/questions/67832234/wrong-react-route-redirect
        */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
