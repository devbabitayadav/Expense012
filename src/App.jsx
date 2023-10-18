
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"
import BalanceSection from "./components/BalanceSection"
import ExpenseSection from "./components/ExpenseSection"
import ListGroup from "./components/ListGroup"
// import ListItem from './components/Listitem';


const App = () => {

  // const [dark , setDark] = useState(false)

  const [transactions, setTransactions]= useState([]);

  const [edit , setEdit] = useState({
    transaction:{}, 
    isEdit: false,
  })

  const deleteTransaction = (id)=>{
     // console.log(text,amount);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
      );
      toast("Transaction Delected!" ,{
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

  const saveTransaction = (text,amount)=> {
     const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: +amount,
     }
     setTransactions([newTransaction , ...transactions]);
     toast("Transaction Saved!" ,{
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    };

  
 const editTransaction = (oldTransaction) => {
  // console.log(oldTransaction);
  setEdit({
    transaction: oldTransaction,
    isEdit:true,
  })
 }

 const updateTransaction = (oldId, newText , newAmount)=>{
setTransactions(transactions.map(item=>item.id===oldId ? {id:oldId , text : newText , amount: +newAmount} : item ))
setEdit({
  transaction:{},
  isEdit:false,
});
 }
  return (
    <>

        <Navbar/>
         <div class="container1">
         <BalanceSection transactions={transactions} saveTransaction={saveTransaction} updateTransaction={updateTransaction} edit={edit}/>
         <ExpenseSection transactions={transactions} />
         <ListGroup transactions={transactions} deleteTransaction={deleteTransaction}
         editTransaction={editTransaction}
         />
         {/* <ListItem transactions={transactions} editTransaction={editTransaction}/> */}

         <ToastContainer/>
      </div>

    </>
  )
}

export default App
