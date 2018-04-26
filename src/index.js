import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; //1

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link}
      /* add prop for activeStyle  what is */
      activeStyle={{  background: 'darkblue'  }}
    >Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{ background: 'darkblue' }} >About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{ background: 'darkblue' }} >Login</NavLink>
  </div>

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => 
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>;

ReactDOM.render((
  <Router>
    <div>
    <Navbar />
      <Route exact path="/" component={Home} /> //2 "when url matches this  'path', render this 'component'", path vs exact path
      <Route exact path="/about" component={About} /> //render vs component
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
