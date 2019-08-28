import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page } from '@magento/peregrine';
import ErrorView from 'src/components/ErrorView/index';
import CreateAccountPage from 'src/components/CreateAccountPage/index';
import Search from 'src/RootComponents/Search';
import CustomDataPage from '../CustomDataPage/CustomDataPage';
import Singlepost from '../CustomDataPage/Singlepost';

const renderRoutingError = props => <ErrorView {...props} />;

const renderRoutes = () => (
    <Switch>
        <Route exact path="/search.html" component={Search} />
        <Route exact path="/create-account" component={CreateAccountPage} />
        <Route exact path="/data.html" component={CustomDataPage} />
        <Route exact path="/singlepost.html" component={Singlepost} />
        <Route render={() => <Page>{renderRoutingError}</Page>} />
    </Switch>
);

export default renderRoutes;
