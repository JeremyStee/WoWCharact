import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

//Components
import Home from './js/Home';
import NotFound from './js/NotFound';
import Fiche from './js/Fiche';

//SCSS
import './scss/App.scss';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={hashHistory}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/fiche" component={Fiche} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
