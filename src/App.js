import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate  } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

function App() {
  return (
  <Router>
    <Routes>
      <Route path ="/" element={<Users/>}/>
      <Route path ="/places/new" exact element={<NewPlace/>}/>
    </Routes>
    {/* <Navigate to="/"/> */}
  </Router>
  );
}

export default App;
