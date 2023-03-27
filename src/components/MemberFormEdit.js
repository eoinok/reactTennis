import React from 'react';
import ReactDOM from 'react-dom';

import { withRouter } from "react-router";	
import { Route, Switch, Link } from "react-router-dom";
import {useParams} from "react-router-dom"

class MemberFormEdit extends React.Component {
  
  
  
  constructor(props) {
    super(props);
	
	this.state = {
      firstname: '',
      surname: '',
	  dateofbirth: '',
	  membertype: '',
    };
	
	
  }
 
 
	 
  componentDidMount() {
        //const { match: { params } } = this.props;
		//const id = useParams();
	       
		fetch('http://localhost:8000/api/members/3')
        .then((response) => response.json())
        .then( (data) =>  {this.setState(JSON.parse(JSON.stringify(data)));

		
		
		});
		
		
  }
  
  myChangeHandler = (event) => {
		let inputname = event.target.name;
		let val = event.target.value;
		this.setState({[inputname]: val});
		console.log(this.state.id);
  }
  
  mySubmitHandler = (event) => {
	
	event.preventDefault();
	const url = "http://localhost:8000/api/members";
    fetch(url, {
      method: 'POST',
	  mode: 'cors',
      headers: { 'Content-Type': 'application/json',
				 'Access-Control-Allow-Origin': '*',
				 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS, PUT, PATCH',
				 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'} ,
	  body: JSON.stringify(this.state)
    }).then(function(response) {
    if (!response.ok) {
	   var err = new Error();
	   console.log(err.stack);
      
	  
    }

    return response.json();
  })
  .then(function(responseData) {
    console.log(responseData)
  });
}
  
  
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
		<div className="form-group">
			<label htmlFor="firstname">Enter your firstname:</label>
			<input className="form-control" value={this.state.firstname} name="firstname" type="text" onChange={this.myChangeHandler}/>
		</div>
		<div className="form-group">
			<label htmlFor="surname">Enter your surname:</label>
			<input className="form-control" value={this.state.surname} name="surname" type="text" onChange={this.myChangeHandler}/>
		</div>
		<div className="form-group">
			<label htmlFor="dateofbirth">Enter your date of birth:</label>
			<input className="form-control" value={this.state.dateofbirth} name="dateofbirth" type="text" onChange={this.myChangeHandler}/>
		</div>
		<div className="form-group">
			<label htmlFor="membertype">Enter your member type:</label>
			<input className="form-control" value={this.state.membertype} name="membertype" type="text" onChange={this.myChangeHandler}/>
		</div>

		<input type="submit" name="submit" />      
	  </form>
    );
  }
}

export default MemberFormEdit;

