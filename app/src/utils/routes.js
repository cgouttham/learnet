import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from './history';
import { ConceptView } from '../components/ConceptView'
import { ConceptsView } from '../components/ConceptsView'
import { HomeView } from '../components/HomeView'

export function Routes () {
    return (
        <div>
            <Router history={history} >
                <div>
                    <Switch>
                        <Route exact path='/'><HomeView/></Route>
                        <Route exact path='/concepts'><ConceptsView/></Route>
                        <Route path='/concept/:conceptID'><ConceptView/></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routes;