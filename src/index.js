import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap'
import App from './App';
import MemberList from './components/MemberList.js';
import MemberForm from './components/MemberForm.js';
import TennisClubNav from './components/TennisClubNav.js';
ReactDOM.render(
  <React.StrictMode>
    <App />
	<TennisClubNav />
  </React.StrictMode>,
  document.getElementById('root')
);

