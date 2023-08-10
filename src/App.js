import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './AddTransaction';
import {  useState} from 'react';



function App() 
{
  const[listData,setListdata]=useState([]);
  


  function deleteItem(id)
  {
    
    setListdata(listData.filter((auto)=>auto.id!==id));
  }

  function addItem(newItem)
  {
    
    setListdata([...listData,{...newItem,id:listData.length+1}]);
    console.log(typeof(newItem.amount));
   
  }
  
  return (
  
 
  <>
  <Header></Header>
<Balance listData={listData}></Balance>
<IncomeExpense listData={listData}></IncomeExpense>
<TransactionList deleteItem={deleteItem} listData={listData}></TransactionList>
<AddTransaction addItem={addItem}></AddTransaction>
</>
  )
  
}

export default App;
