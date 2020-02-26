import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CampaignDetailsView from './views/CampaignDetailsView';
import CampaignsView from './views/CampaignsView';
import DashboardView from './views/DashboardView';
import './App.css';

const App = () => (
    <Router>
        <Switch>
          <Route exact path="/campaigns" component={CampaignsView} />
          <Route exact path="/campaigns/:id" component={CampaignDetailsView} />
          <Route exact path="/" component={DashboardView} />
        </Switch>
    </Router>
);

export default App;
