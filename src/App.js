import React, {Component} from 'react';
import './App.css';
import GroupList from "./components/GroupList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import EditGroup from "./components/EditGroup";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true}  component={Home}/>
                    <Route path='/groups' exact={true} component={GroupList}/>
                    <Route path='/groups/:id' component={EditGroup}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
