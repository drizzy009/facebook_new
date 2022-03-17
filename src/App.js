import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Body from './body';
import Dashboard from './Dashboard';
import { BrowserRouter , Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Body/>} exact/>
        <Route path='/dashboard' element={<Dashboard/>} exact/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
