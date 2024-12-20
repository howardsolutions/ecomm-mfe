import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import SignIn from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

export default function App({ history, onSignIn }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin'>
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path='/auth/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
