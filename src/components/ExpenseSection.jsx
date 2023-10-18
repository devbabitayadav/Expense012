import React from 'react'

const ExpenseSection = ({transactions}) => {

const income = transactions.filter((transaction)=>{
if(transaction.amount>0){
    return true;
}
}).reduce((p,c)=>{
    return p+c.amount;
},0);

const expense = transactions.filter((transaction)=>{
    if(transaction.amount<0){
        return true
    }
    }).reduce((p,c)=>{
        return p+c.amount;
    },0)
// console.log(expense);
    return (
        <div>
            <div id="current-status" class="main-section">
                <div id="income" class="balance">
                    <span>
                        <p>Current Income</p>
                        <h1>₹{income}</h1>
                    </span>
                </div>

                <div id="expense" class="balance">
                    <span>
                        <p>Current Expense</p>
                        <h1>₹{expense}</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ExpenseSection
