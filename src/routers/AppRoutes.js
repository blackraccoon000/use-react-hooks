import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import CountUp from '../components/CountUp';
import Note from '../components/Note';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/countUp" component={CountUp} exact={true} />
      <Route path="/note" component={Note} exact={true} />
    </Switch>
  );
};

export default AppRoutes;
