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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);
  let routes;
  if (isLoggedIn) {
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
          element={<Auth />}
        />
        {/* <Navigate to="/auth" /> */}
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}
    >
  <Router>
    <Navigation />
    <main>
    {routes}
    {/* <Routes>
      <Route path ="/" element={<Users/>}/>
      <Route path ="/:userId/places" element={<UserPlaces/>}/>
      <Route path ="/places/new" exact element={<NewPlace/>}/>
      <Route path ="/places/:placeId" element={<UpdatePlace/>}/>
    </Routes> */}
    {/* <Navigate to="/"/> */}
    </main>
  </Router>
  </AuthContext.Provider>
  );
}

export default App;
