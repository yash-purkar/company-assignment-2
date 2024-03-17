import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <ToastContainer position='top-center' autoClose={1000} />
    </div>
  );
}

export default App;
