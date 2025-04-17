import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate  } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';
import Navigation from './shared/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useCallback, useState } from 'react';
import { useAuth } from './shared/hooks/auth-hook';

function App() {

  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path ="/" element={<Users/>}/>
      <Route path ="/:userId/places" element={<UserPlaces/>}/>
      <Route path ="/places/new" exact element={<NewPlace/>}/>
      <Route path ="/places/:placeId" element={<UpdatePlace/>}/>
        {/* <Navigate to="/" /> */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path ="/" element={<Users/>}/>
      <Route path ="/:userId/places" element={<UserPlaces/>}/>
        <Route path="/auth"
          element={<Auth/>}
        />
        {/* <Navigate to="/auth" /> */}
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ userId: userId, token:token, login: login, logout: logout }}
    >
  <Router>
    <Navigation />
    <main>
    {routes}
    </main>
  </Router>
  </AuthContext.Provider>
  );
}

export default App;
