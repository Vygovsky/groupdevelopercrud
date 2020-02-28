import React, {Component} from 'react';
import {Button, Form, Input, Label, FormGroup, Container} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom'
import AppNavBar from "./AppNavBar";
import Service from "./Service";

class EditGroup extends Component {
    Service = new Service();
    emptyItem = {
        name: '',
        address: '',
        city: '',
        stateOrProvince: '',
        country: '',
        postalCode: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            const group = await this.Service.getGroupById(id);
            this.setState({item: group});
        }
    }

    async handelChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let item = {...this.state.item};
        item[name] = value;
        this.setState({item})
    }


    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        let items = {...this.state.itema}

        const itemId = (item.id) ? this.Service.editGroup(item) : this.Service.saveGroup(item);
        // this.props.history.push({item: itemId});

        items.push({value:itemId});
        this.setState({items})

        /*     this.setState(prevState => ({
                 arrayItem: [...prevState.item, itemId]
             }));*/
      //  this.props.push({item: arrayItem});
    }

    render() {
        const {item} = this.state;

        const title = <h2>{item.id ? 'Edit Group' : 'Add Group'}</h2>;
        return <div>
            <AppNavBar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={`${item.name || ' '}`}
                               onChange={this.handelChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" value={`${item.address || ' '}`}
                               onChange={this.handelChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value={`${item.city || ' '}`}
                               onChange={this.handelChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="stateOrProvince">State/Province</Label>
                            <Input type="text" name="stateOrProvince" id="stateOrProvince"
                                   value={`${item.stateOrProvince || ' '}`}
                                   onChange={this.handelChange} autoComplete="address-level1"/>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country"
                                   value={`${item.country || ' '}`}
                                   onChange={this.handelChange} autoComplete="address-level1"/>
                        </FormGroup>
                        <FormGroup className="col-md-5 mb-3">
                            <Label for="postalCode">Postal Code</Label>
                            <Input type="text" name="postalCode" id="postalCode"
                                   value={`${item.postalCode || ' '}`}
                                   onChange={this.handelChange} autoComplete="address-level1"/>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{` `}
                        <Button color="secondary" tag={Link} to={"/groups"}>Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(EditGroup);

/*   async componentDidMount() {

       const id = this.props.match.params.id;
       if (id !== 'new') {
           const group = await (await fetch(`/api/group/${id}`)).json();
           this.setState({item: group});
       }
   }*/

/*  async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        const url = (item.id) ? '/api/group/' + item.id : '/api/group';

        await fetch(url, {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        this.props.history.push('/groups')
    }*/
