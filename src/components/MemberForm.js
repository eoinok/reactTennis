import React from 'react';
import ReactDOM from 'react-dom';

class MemberForm extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
      firstname: null,
      surname: null,
	  dateofbirth: null,
	  membertype: null,
    };
  }
  
  myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
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
			<label for="firstname">Enter your firstname:</label>
			<input className="form-control" name="firstname" type="text" onChange={this.myChangeHandler}/>
		</div>
		<div className="form-group">
			<label for="surname">Enter your surname:</label>
			<input className="form-control" name="surname" type="text" onChange={this.myChangeHandler}/>
		</div>
		<div className="form-group">
			<label for="dateofbirth">Enter your date of birth:</label>
			<input className="form-control" name="dateofbirth" type="text" onChange={this.myChangeHandler}/>
		</div>
		<div className="form-group">
			<label for="membertype">Enter your member type:</label>
			<input className="form-control" name="membertype" type="text" onChange={this.myChangeHandler}/>
		</div>

		<input type="submit" name="submit" />      
	  </form>
    );
  }
}

export default MemberForm;

