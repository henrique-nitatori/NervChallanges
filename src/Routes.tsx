import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


import LandingPage from './Pages/LandingPage'
import Challanges from './Pages/Challanges'

export default () => {

    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" exact component={LandingPage} />
                <Route path="/desafios" component={Challanges} />
            </Switch>
        </BrowserRouter>
    )
    
}