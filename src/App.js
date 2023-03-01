import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage';
import LandingPage from './pages/landingpage';
import { Login } from './pages/signin';
import { SignUp } from './pages/signup';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<LandingPage/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<SignUp/>} path='/sign-up'/>
      <Route element={<Homepage/>} path='/home-page'/>
    </Routes>
    </div>
  );
}

export default App;

