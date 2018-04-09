import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './home'
import Login from './login'
import About from './about'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" exact style={ link } activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/about" exact style={ link } activeStyle={ {background: 'darkblue'} }>About</NavLink>
      <NavLink to="/login" exact style={ link } activeStyle={ {background: 'darkblue'} }>Login</NavLink>
    </div>
  )
}



ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/login' component={Login}/>
    </div>
  </Router>,
  document.getElementById('root')
);
