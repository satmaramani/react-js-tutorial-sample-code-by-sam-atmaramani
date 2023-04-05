// container/src/App.js
import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => {
    return(<div>
        <h1>Powered by <font color='red'>TechySam</font></h1>
        <font color='red'>
            <Link to='/'>Home - This is Container</Link><br />
            <Link to='/react'>Go to react - This is Container</Link>
        </font>
    </div >);
}

const Footer = () => {
    return (<div><font color='red'>This footer is coming from Container </font></div>);
}
export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/' component={HelloReactApp} />

            </Switch>
            <hr />
            <Footer />
        </Router>
    )
}
