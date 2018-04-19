import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";
import Scraper from "./components/scraper/Scraper";

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/scraper' component={Scraper}/>
    </Switch>
  )
}