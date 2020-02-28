import React, {Component} from 'react';
import {Button, Container} from 'reactstrap';
import {Link} from 'react-router-dom'
import AppNavBar from "./AppNavBar";

class Home extends Component {

    render() {
        return (
            <div>
                <AppNavBar/>
                <Container fluid>
                    <Button color="link"><Link to="/groups">Manage Group</Link></Button>
                </Container>
            </div>
        )
    }
}

export default Home;


