import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Service from "./components/Service";

class App extends Component {
    Service = new Service();
    state = {
        groups: [],
        isLoading: false
    };

    /*    async componentDidMount() {
            const response = await fetch('api/groups');
            const body = await response.json();
            this.setState({
                isLoading: false,
                groups: body
            });
            console.log(this.state.body)
        };*/

    componentDidMount() {
        this.Service.getAllGroups()
            .then(this.getAllGroup)
            .catch(this.onError);
    };

    getAllGroup = groups => {
        this.setState({
            groups,
            isLoading: false
        });
        console.log(this.state.groups);
    };

    onError = () => {
        this.setState({
            isLoading: true
        })
    };


    render() {
        const {isLoading, groups} = this.state;

        if (isLoading) {
            return <h1>...Loading</h1>
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="App-intro">
                        <h2>Group List</h2>
                        {groups.map(group =>
                            <div key={group.id}>
                                {group.name}
                            </div>
                        )}
                    </div>
                </header>
            </div>

        );
    }
}

export default App;
