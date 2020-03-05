import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/user_components/Login';
import Signup from './components/user_components/Signup';
import Logout from './components/user_components/Logout';
import Map from './components/map_components/Map';
import PrivateRoute from './Data/PrivateRoute';
import axiosWithAuth from './Data/axiosWithAuth';
import jwtDecode from 'jwt-decode';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) return;
    const decoded = jwtDecode(token);

    if (!decoded || user.id) return;
    (async () => {
      try {
        const response = await axiosWithAuth().get('https://quakelabs-be-staging.herokuapp.com/api/users/${decoded.__uuid}');
        setUser(response.data.user);
      } catch(error) {
        console.log(error);
      }
    })();
  },[user.id]);

  return (
    <div className="App">
      
      <PrivateRoute
        exact
        path='/map'
        component = {props => <Map {...props} user = {user} />}
      />
      <Route
        exact
        path='/login'
        render={props => <Login {...props} setUser={setUser} />}
      />
      <Route
        exact
        path='/signup'
        render={props => <Signup {...props} setUser={setUser} />}
      />
      <Route
        exact
        path='/logout'
        render={props => <Logout {...props} setUser={setUser} />}
      />
    </div>
  );
}

export default App;
