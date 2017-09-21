
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import TaskDetails from './components/Home/TaskDetails.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={TaskDetails} path='/details/:id' />

    </Switch>
)
