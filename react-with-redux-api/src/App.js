
import './App.css';
import Header from './container/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from './container/ProductList';
import ProductDetails from './container/ProductDetails';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/product/:productId" component={ProductDetails}/>
          <Route>4O4 Not Found</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
