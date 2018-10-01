import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from './images/logo.png'
import Home from './components/presentatnional/Home';
import Agents from './components/functional/Agents';
import Login from './components/functional/Login';

import { Container } from './GlobalStyle';


const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  padding: 5px 2%;

  a {
    text-decoration: none;
    color: white;
  }

  .agent {
    color: black;
    cursor: default;
    transition: all 1s ease 1s;
  
    &:hover {
      color: white;
    }
  }

  .logo {
    display: flex;
    align-items: center;
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <Link to='/' className='logo'>
          <img src={logo} alt="logo" /> <p>Secret Agent Supply Inc.</p> </Link>
          <Link to='/login' className='agent'>Agents</Link>
        </Navigation>

        <Route exact path='/' component={Home}/>
        <Route path='/login' render={props => <Login {...props} />}/>
        <Route path='/agents' component={Agents}/>
      </div>
    );
  }
}

export default App;


//change front page, store, classes, locations, hours 
// store menu dropdown to show apparel
//contact area (form)
//assain area

//Use router
//3 components (home page, store, contact)
////home: 