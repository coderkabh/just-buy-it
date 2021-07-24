import React, { useEffect, useReducer } from 'react';
import Header from './Header.js';
import './App.css';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import Checkout from './Checkout.js'
import Login from './Login.js'
import {auth} from './firebase.js'
import {useStateValue} from './StateProvider.js';
import CustomerSupport from './CustomerSupport.js';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged(authUser => {
      console.log('The user is - ', authUser);

      if(authUser){
        //the user is logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/payment">
          </Route>
          <Route exact path="/customer-support">
            <CustomerSupport/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>



        </Switch>
    </div>

    </Router>
  );
}

export default App;
