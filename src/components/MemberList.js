import React from 'react';
import ReactDOM from 'react-dom';
import Member from './Member';
import MemberFormEdit from './MemberFormEdit';
import MemberForm from './MemberForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
class MemberList extends React.Component {
	handleClick = userId => {
	  const requestOptions = {
		method: 'DELETE'
	  };

	  fetch("http://localhost:8000/api/members/" + userId, requestOptions).then((response) => {
		return response.json();
	  }).then((result) => {
		alert("that member has been deleted");
	  }).catch((result) => {
		console.log(result);
	  });
	}
	
	state = {
        members: []
    }
    
		componentDidMount() {
			fetch('http://localhost:8000/api/members')
			.then((response) => response.json())
			.then(MemberList => {
				this.setState({ members: MemberList });
			});
		}
	
	mySubmitHandler = (event) => {
	
		event.preventDefault();
		switch(event.action) {
			case "delete":
				console.log("delete");
				break;
			case "edit":
				console.log("edit");
				break;
		}
	}
	
	render(){
		
		console.log(this.state.members);
		
		const table=this.state.members.map((member) => 
			<tr key={member.id}><td>{member.firstname}</td>
								<td>{member.surname}</td>
								<td>{member.dateofbirth}</td>
								<td>{member.membertype}</td>
									<td><button onClick={() => { this.handleClick(member.id) }} className="delete-btn">Delete</button>
									</td>
									<td><Link to={`/member-form-edit/${member.id}`} ><button className="edit-btn">Edit</button></Link>
									</td>
							</tr>);
		const router = <Router><Switch>
								<Route path="/member-form-edit/:id" 
									render={(props) => (
									<MemberFormEdit id={4}/>)}> 
								
								</Route>
						</Switch>
				</Router>;
		return <table className='table table-striped'><tbody>{table}</tbody></table>;
		
		
	}
	
	
}

export default MemberList;
