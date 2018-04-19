import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
    </Switch>
  )
}