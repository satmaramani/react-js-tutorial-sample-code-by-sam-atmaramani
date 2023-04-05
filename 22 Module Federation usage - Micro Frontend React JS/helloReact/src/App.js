// helloReact/src/App.js
import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import './style.css'


const helloWorld = () => (<div style={{color:"blue"}}>Remote port 8084: Hello Style! this text must be Blue </div>)
const helloReact = () => (<div style={{color:"red"}}>Remote port 8084: Hello React! this text must be Red </div>)
const temp = () => (<div style={{color:"red"}}>Temp Text</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/react" component={helloReact} />
                <Route path="/" component={helloWorld} />
                <Route path="/temp" component={temp} />
            </Switch>
            <br />
            <div > ZZZZZZZZZZZZZZZ  Remote port 8084 Start of Remote server ################</div><br /> <br /> <br /> <br /> 
            <Link to='/react'>Remote port 8084 Say hello to React! This is Remote</Link><br /> <br /> 
            <br />
            <Link to='/'>Remote port 8084Say hello to the World! This is Remote</Link><br /> <br /> 
            <Link to='/temp'>Temp Text Link</Link><br /> <br /> 

            <div>Remote port 8084 End of Remote server ################</div><br /> <br /> <br /> 
        </Router>
    </div>
}
