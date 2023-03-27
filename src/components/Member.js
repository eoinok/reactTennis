import React from 'react';
import ReactDOM from 'react-dom';
class Member extends React.Component {
	
	
	render(){
		
		return <div>{this.props.member.firstname}</div>
		
	}
	
	
}

export default Member;
