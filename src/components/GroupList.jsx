import React, {Component} from 'react';
import Service from "./Service";
import {Button, ButtonGroup} from 'reactstrap';

class GroupList extends Component {
    Service = new Service();

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            groups: []
        };
        this.removeGroupById = this.removeGroupById.bind(this);

    }

    /*    async removeById(id) {
            await fetch(`api/group/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                let updateGroups = [...this.state.groups].filter(groupItem => groupItem.id !== id);
                this.setState({groups: updateGroups})
            });

        }*/


    removeById = id => {
        let updateGroups = [...this.state.groups].filter(groupItem => groupItem.id !== id);
        this.setState({
            groups: updateGroups
        });

    };

    removeGroupById(id) {
        this.Service.removeServiceGroupById(id)
            .then(() => this.removeById(id))
            .catch(this.onError)
    };

    componentDidMount() {
        this.Service.getAllGroups()
            .then(this.getAllGroup)
            .catch(this.onError)
    };

    getAllGroup = groups => {
        this.setState({
            groups,
            isLoading: false
        });
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
                    <div className="App-intro">
                        <h2>Group List</h2>
                        {groups.map(group =>
                            <div key={group.id}>
                                {group.name}
                                <ButtonGroup>
                                    <Button size="sm" color="danger"
                                            onClick={()=>this.removeGroupById(group.id)}>Delete</Button>

                                </ButtonGroup>
                            </div>
                        )}
                    </div>
                </header>
            </div>

        );
    }
}

export default GroupList;


//---------------Hard---------------//
/*    async componentDidMount() {
            const response = await fetch('api/groups');
            const body = await response.json();
            this.setState({
                isLoading: false,
                groups: body
            });
            console.log(this.state.body)
        };*/
