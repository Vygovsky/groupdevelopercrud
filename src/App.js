import React, {Component} from 'react';
import './App.css';

import GroupList from "./components/GroupList";

class App extends Component {

    render() {
        return (
            <div className="App">
                <GroupList/>
            </div>

        );
    }
}

export default App;
