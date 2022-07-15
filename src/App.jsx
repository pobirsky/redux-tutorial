import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from '../src/asyncAction/customers'

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }



  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{fontSize: '3rem'}}>{cash}</div>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
          <button onClick={() => addCustomer(prompt())}>Добавить пользователя</button>
          <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
        <div>
          {customers.length > 0 ?
            <div>
              {customers.map(el =>
                <div onClick={() => removeCustomer(el)}>
                  {el.name}
                </div>)}
            </div>
            :
            <div style={{marginTop: 20, fontSize: '2rem'}}>Клиенты отсуствуют</div>}
        </div>
      </div>

    </div>
  );
}

export default App;
