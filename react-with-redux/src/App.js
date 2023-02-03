import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index'

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {deposite,withdraw}= bindActionCreators(actionCreators,dispatch);

  return (
    <div className="App">
      <h3>{account}</h3>
      <button onClick={()=>deposite(300)}>Deposite</button>
      <button onClick={()=>withdraw(300)}>Withdraw</button>
    </div>
  );
}

export default App;
