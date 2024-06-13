import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/search' element={<Home/>}/>
        <Route path='/view' element={<Home/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
