import React, { useContext, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';
import Context from './utils/context';
import { ConceptsView, ConceptView } from './components/Concept'

const Routes = () => {
    const context = useContext(Context)
    return(
        <div>
        <Router history={history} >
            <div>
                <Switch>
                    <Route exact path='/' component={ConceptsView} />
                    <Route exact path='/concepts' component={ConceptsView} />
                    <Route path='/concept/:conceptID' component={ConceptView} />
                </Switch>
            </div>
        </Router>
        </div>
    )
}

export default Routes;