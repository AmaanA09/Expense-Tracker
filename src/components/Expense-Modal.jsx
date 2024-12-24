
import React, { useState, useEffect } from "react";
import {toast } from 'react-toastify';
function ExpenseModal({ data, changeExpenseData, setExpenseModal }) {
  const [srno, setSrno] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [category, setCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [showErrors , setShowErrors] = useState({})
  const notify = () => toast("Transaction Add Successfully!");

  const validate = ()=>{
    const error = {}
    if(!expenseName){
      error.expenseName = 'Expense Name is Required'
    }
    if(!expenseDate){
      error.expenseDate = 'Date is Required'
    }
    if(!category){
      error.category = 'Cartegory is Required'
    }
    if(!expenseAmount){
      error.amount = 'Amount is Required'
    }

    setShowErrors(error)
    return Object.keys(error).length === 0
  }

  const dataIndex = data.map((item,index) => {
    return  index+1;
  });
  console.log("expense",dataIndex)

  useEffect(()=>{
    setSrno(dataIndex.length+1)
  },[data])
  console.log("expensemodal srno",srno)
  const handleExpenseName = (e) => {
    setExpenseName(e.target.value);
  };
  const handleExpenseDate = (e) => {
    setExpenseDate(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleExpenseAmount = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleAddExpense = () => {
    // e.preventDefault()
    // const newData = [...data]
    // const newObj =

    //  newData.push(newObj)
    if(validate()){

    changeExpenseData([
      ...data,
      {
        SrNo: Date.now(srno),
        Expense: expenseName,
        Date: expenseDate,
        Category: category,
        Amount: parseFloat(expenseAmount),
      },
    ]);
    setExpenseModal(false);
    notify()
  }
  };

  console.log("this is amount", typeof expenseAmount);

  return (
    <div className="opacity" onClick={() => setExpenseModal(false)}>
    <div className="modal-container" >
      <div className="modal-inner-div">
        <button
          className="expense-exit-button"
          onClick={() => setExpenseModal(false)}
        >
          x
        </button>
        <form>
          <h2 className="popup-head">Add Expense Detail</h2>
          <div>
            <label htmlFor="sr-no">Sr.No </label>
          </div>
          <div className="input-div">
            <input
              id="sr-no"
              type="number"
              placeholder="Sr.No"
              className="input-style"
              // onChange={handleId}
              readOnly
              value={srno}
            />
          </div>
          <div>
            <label htmlFor="exp-name">Expense Name </label>
          </div>
          <div className="input-div">
            <input
              id="exp-name"
              type="text"
              placeholder="Expense Name"
              className="input-style"
              onChange={handleExpenseName}
              value={expenseName}
            />
            <p>{showErrors.expenseName && <span style={{color:'red'}}>{showErrors.expenseName}</span>}</p>
          </div>
          <div>
            <label htmlFor="date"> Date</label>
          </div>
          <div className="input-div">
            <input
              id="date"
              type="date"
              className="input-style"
              onChange={handleExpenseDate}
              value={expenseDate}
            />
           <p> {showErrors.expenseDate && <span style={{color:'red'}}>{showErrors.expenseDate}</span>}</p>
          </div>
          <div>
            <label htmlFor="category">Select Category</label>
          </div>
          <div className="input-div">
            <select
              id="category"
              className="input-style"
              onChange={handleCategory}
              value={category}
            >
              <option>Select Options</option>
              <option>Food & Drinks</option>
              <option>Groceries</option>
              <option>Travel</option>
              <option>Health</option>
            </select>
            <p>{showErrors.category && <span style={{color:'red'}}>{showErrors.category}</span>}</p>
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="input-div">
            <input
              id="amount"
              type="number"
              placeholder="Amount"
              className="input-style"
              onChange={handleExpenseAmount}
              value={expenseAmount}
            />
            <p>{showErrors.amount && <span style={{color:'red'}}>{showErrors.amount}</span>}</p>
          </div>
          <button className="add-btn" type="button" onClick={handleAddExpense}>
            Add Expense
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ExpenseModal;
