import React, { useEffect, useState } from 'react'

const BalanceSection = ({ transactions, saveTransaction, edit, updateTransaction, }) => {

  const [text, setText] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [type, setType] = useState("1");


  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit.isEdit) {
      updateTransaction(edit.transaction.id, text, amount)
    } else {
      saveTransaction(text, amount * type);
    }
    setAmount("");
    setText("");
  };

  useEffect(() => {
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)
  }, [edit])
  return (
    <div>
      <div class="main-section">
        <div id="current-bal" class="balance">
          <span>
            <p>Current Balance</p>
            <h1>₹{balance} </h1>
          </span>
          <i class="fa-solid fa-wallet"></i>
        </div>
        <form class="transaction-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Your Transaction Details"
            onChange={(e) => setText(e.target.value)}
            value={text} />

          <input type="number" placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount} />
          <select className='mt-2 border-0' name="" id="" onChange={(e) => { setType(parseInt(e.target.value)) }}>
            <option className='border-0' value="1">income</option>
            <option value="-1">expenses</option>
          </select>
          <button>Save Transaction <i class="fa-solid fa-floppy-disk"></i></button>
        </form>

      </div>
    </div>
  )
}

export default BalanceSection
