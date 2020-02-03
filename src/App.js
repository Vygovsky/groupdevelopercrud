import React, {Component} from 'react';
import './App.css';
import GroupList from "./components/GroupList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
class App extends Component {

    render() {
        return (

            <Router>
                <Switch>
                    <Route path='/' exact={true}  component={Home}/>
                    <Route path='/groups' exact={true} component={GroupList}/>
                </Switch>
            </Router>

        )
    }
}

export default App;
