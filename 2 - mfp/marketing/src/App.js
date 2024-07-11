import { StylesProvider } from '@material-ui/core'
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from "../components/Landing"
import Pricing from "../components/Pricing"

export default function App() {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
