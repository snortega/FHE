import './App.css';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Catalog from './components/Catalog/Catalog';
import Confirm from './components/Confirm/Confirm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/confirm' element={<Confirm/>}/>
      </Routes>
    </div>
  );
}

export default App;
