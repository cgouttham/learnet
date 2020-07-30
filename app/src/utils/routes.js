import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './history';
import { ConceptView } from '../components/Concept'
import { ConceptsView } from '../components/ConceptsView'
import { Home } from '../components/Home'

export function Routes () {
    return (
        <div>
            <Router history={history} >
                <div>
                    <Switch>
                        <Route exact path='/'><Home/></Route>
                        <Route exact path='/concepts'><ConceptsView/></Route>
                        <Route path='/concept/:conceptID'><ConceptView/></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routes;