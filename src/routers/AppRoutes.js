import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import CountUp from '../components/CountUp';
import NoteApp from '../components/NoteApp';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/countUp" component={CountUp} exact={true} />
      <Route path="/noteApp" component={NoteApp} exact={true} />
    </Switch>
  );
};

export default AppRoutes;
