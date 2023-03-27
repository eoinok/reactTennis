import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemberList from './MemberList.js';
import MemberForm from './MemberForm.js';
import MemberFormEdit from './MemberFormEdit.js';
class TennisClubNav extends React.Component {
  constructor(props) {
    super(props);
  }
  
 
  render() {
    return (
    <div>
		<div className="row">
			<div className="col-md-12">
				<Router>
					<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
						<Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/member-list">Member List</Nav.Link>
								<Nav.Link href="/member-form">Member Form</Nav.Link>
								<Nav.Link href="/member-form-edit">Member Form Edit</Nav.Link>
							
							</Nav>
							<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
							</Form>
						</Navbar.Collapse>
					</Navbar>
					<br />
					<Switch>
						<Route path="/member-list">
							<MemberList />
						</Route>
						<Route path="/member-form">
							<MemberForm />
						</Route>
						<Route path="/member-form-edit">
							<MemberFormEdit />
						</Route>
						
					</Switch>
				</Router>
			</div>
		</div>
	</div>
    );
  }
}

export default TennisClubNav;

