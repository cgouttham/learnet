import React, { useContext, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';
import { ConceptsView, ConceptView } from './components/Concept'

export function Routes () {
    return (
        <div>
            <Router history={history} >
                <div>
                    <Switch>
                        <Route exact path='/'><ConceptsView/></Route>
                        <Route exact path='/concepts'><ConceptsView/></Route>
                        <Route path='/concept/:conceptID'><ConceptView/></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routes;