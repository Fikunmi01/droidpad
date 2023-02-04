import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingpage';
import { Login } from './pages/signin';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<LandingPage/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
    </Routes>
    </div>
  );
}

export default App;

