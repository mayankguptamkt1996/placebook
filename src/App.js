import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate  } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';
import Navigation from './shared/Navigation/MainNavigation'

function App() {
  return (
  <Router>
    <Navigation />
    <main>
    <Routes>
      <Route path ="/" element={<Users/>}/>
      <Route path ="/places/new" exact element={<NewPlace/>}/>
    </Routes>
    {/* <Navigate to="/"/> */}
    </main>
  </Router>
  );
}

export default App;
