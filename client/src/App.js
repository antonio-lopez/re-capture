import React from 'react';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import EntryDetails from './components/EntryDetails/EntryDetails';
import CreateEntry from './components/CreateEntry/CreateEntry';
import UpdateEntry from './components/UpdateEntry/UpdateEntry';
import Main from './components/Main/Main';
import Error from './components/Error/Error';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

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
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
