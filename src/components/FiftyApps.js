import React from 'react';
import { Route, Redirect, useLocation, Switch } from 'react-router-dom';

import HeaderSlim from './HeaderSlim';
import Default from './Default';
import ExpandingCards from './apps/day-1/ExpandingCards';
import ProgressSteps from './apps/day-2/ProgressSteps';

const FiftyApps = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <HeaderSlim />
      <Switch>
        <Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
        <Route path='/' exact component={Default} />
        <Route path='/1' component={ExpandingCards} />
        <Route path='/2' component={ProgressSteps} />
      </Switch>
    </div>
  );
};

export default FiftyApps;
