import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'

class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this)
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://www.facebook.com/roman.vygovsky.98">@romandev</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/Vygovsky">Git
                            Hub</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    }
}

export default AppNavBar;


