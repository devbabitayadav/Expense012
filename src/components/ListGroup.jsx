
import React from "react";
import ListItem from "./ListItem";





const ListGroup = ({transactions , deleteTransaction , editTransaction}) => {
if(!transactions|| transactions.length===0){
  return (
    <h3 className='display-6 text-center mt-3'>No Transactions Yet..</h3>
  )
}


  return (
    
       <ul class="list-group">
   {transactions.map((transaction)=>
   (<ListItem key={transactions.id} transaction={transaction} deleteTransaction={deleteTransaction} editTransaction={editTransaction}/>))}
               </ul>
    
  )
}

export default ListGroup;
