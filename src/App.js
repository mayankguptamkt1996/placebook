import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate  } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';
import Navigation from './shared/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

function App() {
  return (
  <Router>
    <Navigation />
    <main>
    <Routes>
      <Route path ="/" element={<Users/>}/>
      <Route path ="/:userId/places" element={<UserPlaces/>}/>
      <Route path ="/places/new" exact element={<NewPlace/>}/>
      <Route path ="/places/:placeId" element={<UpdatePlace/>}/>
    </Routes>
    {/* <Navigate to="/"/> */}
    </main>
  </Router>
  );
}

export default App;
