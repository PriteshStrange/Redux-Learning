import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
        <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
