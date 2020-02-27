import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppShell from './components/AppShell';
import ViewContext from './contexts/ViewContext';
import CampaignDetailsView from './views/CampaignDetailsView';
import CampaignsView from './views/CampaignsView';
import DashboardView from './views/DashboardView';
import routes from './routes';
import './App.css';

const App = () => {
    const [title, setTitle] = useState('Aktify Code Challenge');
    const value = {title, setTitle};

    return (
        <Router>
            <ViewContext.Provider value={value}>
                <AppShell>
                    <Switch>
                        <Route exact path={routes.campaignList} component={CampaignsView} />
                        <Route exact path={routes.campaignDetails.pathTemplate} component={CampaignDetailsView} />
                        <Route exact path={routes.dashboard} component={DashboardView} />
                    </Switch>
                </AppShell>
            </ViewContext.Provider>
        </Router>
    );
};

export default App;
