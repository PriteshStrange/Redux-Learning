import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route>4O4 Not found !!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
