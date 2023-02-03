import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router } from "react-router-dom";
import "./App.css";
import Card from "./Component/Card";
import Header from "./Component/Header";
import CardDetails from './Component/CardDetails';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Route path="/" element={<Card/>}/>
      <Route path="/cart/:id" element={<CardDetails/>}/>
    </Router>
    </>
  );
}

export default App;
