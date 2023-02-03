import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
