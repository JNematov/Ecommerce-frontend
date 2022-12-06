import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function App() {

  const {user} = useContext(UserContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user ? <Home/> :  <Navigate to='/login'/>}/>
          <Route exact path='/login' element={!user ? <Login/> : <Navigate to='/'/> }/>
          <Route exact path='/signup' element={!user ? <Signup/>: <Navigate to='/'/>  }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
