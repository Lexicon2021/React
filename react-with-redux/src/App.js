import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store';
import Account from './Amount';



function App() {

  const account = useSelector((state) => state.account);
  console.log(account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch); // *** object with withdraw money Fn && deposit money Fn

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() =>depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <Account />
    </div>
  );
}

export default App;
