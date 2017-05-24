import React from 'react';
import ReactDOM from 'react-dom';

import MainItem from './components/MainItem';
import Tabs from './components/Tabs';
import Home from './components/Home';

import actors from './actors';
import places from './places';
import records from './records';

import { Router, Route,hashHistory, IndexRoute } from 'react-router';

function ActorsWrap() {
  return (
    <MainItem data={actors} length={actors.length} />
  );
}
function PlacesWrap() {
  return (
    <MainItem data={places} length={places.length} />
  );
}
function RecordsWrap() {
  return (
    <MainItem data={records} length={records.length}  />
  );
}

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Tabs}>
        <IndexRoute  component={Home} />
        <Route path="actors" component={ActorsWrap} />
        <Route path="places" component={PlacesWrap} />
        <Route path="records" component={RecordsWrap} />
      </Route>
  </Router>,
  document.getElementById('root')
);
