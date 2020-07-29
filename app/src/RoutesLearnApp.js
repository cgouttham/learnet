import { ConceptsView, ConceptView } from './components/Concept'
import React, { useState } from 'react';
import history from './utils/history';
import { Router, Route, Switch, Redirect } from 'react-router';



export function RoutesLearnApp() {
    const [concept, setConcept] = useState(null);

    return (
        <Routes/>
    );
}

export function Routes () {
    return (
        <div>
            <Router history={history} >
                <div>
                    <Switch>
                        <Route exact path='/'>
                            <ConceptsView/>
                        </Route>
                        <Route exact path='/concepts'>
                            <ConceptsView/>
                        </Route>
                        <Route path='/concept/:conceptID'>
                            <ConceptView/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}