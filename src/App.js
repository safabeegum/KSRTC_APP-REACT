import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Add/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<Home/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
