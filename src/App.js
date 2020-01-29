import React, {Component} from 'react';
import './App.css';
import GroupList from "./components/GroupList";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

class App extends Component {

    render() {
        return (

            <Router>
                <Switch>
                    <GroupList/>
                </Switch>
            </Router>
        );
    }
}

export default App;
