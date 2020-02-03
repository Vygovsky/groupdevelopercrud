import React, {Component} from 'react';
import Service from "./Service";
import {Button, ButtonGroup, Table, Container} from 'reactstrap';
import {Link} from 'react-router-dom'
import AppNavBar from "./AppNavBar";


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
            return <h1>...Loading...</h1>
        }

        const groupList = groups.map(group => {
            const address = `${group.address || ''} ${group.city || ''} ${group.country || ''}`;
            return <tr key={group.id}>
                <td style={{whiteSpace: "nowrap"}}>{group.name}</td>
                <td>{address}</td>
                <td> {group.events.map(event => {
                    return <div key={event.id}>{new Intl.DateTimeFormat('en-Us', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(event.date))}:{event.title}</div>
                })}
                </td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" /*tag={Link} to={"/group/" + group.id}*/>Edit</Button>
                        <Button size="sm" color="danger"
                                onClick={() => this.removeGroupById(group.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>

        });

        return (
            <div>
                 <AppNavBar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="group/new">Add group</Button>
                    </div>
                    <h3>My Group Tour</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">Location</th>
                            <th>Event</th>
                            <th width="20%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {groupList}
                        </tbody>
                    </Table>
                </Container>

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

