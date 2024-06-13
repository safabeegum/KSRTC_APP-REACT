import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Login from './components/Login';
import SignUp from './components/SignUp';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
