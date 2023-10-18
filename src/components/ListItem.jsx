import React from 'react';
import { FaTrash } from "react-icons/fa";
import {FaEdit} from "react-icons/fa"

const ListItem = ({transaction ,deleteTransaction ,  editTransaction}) => {
  return (
  
       <li class="list-item">
              <span>
                <h3 class={transaction.amount > 0 ? "income-transaction" : "expense-transaction"}>₹{transaction.amount}</h3>
                <h4>{transaction.text}</h4>
              </span>
              
             
              <button className='editbtn' onClick={()=>editTransaction(transaction)}><FaEdit/></button>
              <button class="delbtn" onClick={()=>deleteTransaction(transaction.id)}><FaTrash/></button>

            </li>
          
  );
};

export default ListItem;
