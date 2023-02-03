import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import Form from './Component/Form';
import Hello from './Component/Hello';

function App() {
  const loc = useLocation()
  const ParmId = loc.pathname.split("/")[2] 
  const dtaas =JSON.parse(localStorage.getItem("FormData")).FormReducer.formData
  const checkId = dtaas.filter((item) => {return item.id === ParmId })
  console.log("🚀 ~ file: App.js:14 ~ checkId ~ checkId", checkId)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" exact element={<Form/>}/>
        <Route path="/add/:id" element={checkId.length == 0  ?  <Hello/>  :  <Form/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
