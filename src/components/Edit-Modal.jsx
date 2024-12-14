import React, { useEffect, useState } from "react";
import {toast } from 'react-toastify';
function EditModal({ setEditModal, dataIndex, displayData, handleEditTrnsaction, data }) {
  const [SrNo, setSrNo] = useState(0);
  const [expense, setExpense] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const notify = () => toast("Update Successfully!");

  const handleExpense = (value) => {
    console.log({value})
    setExpense(value);
  };
  const handleDate = (value) => {
    setDate(value);
  };
  const handleCategory = (value) => {
    setCategory(value);
  };
  const handleAmount = (value) => {
    setAmount(value);
  };

  const selectEditItem = displayData.filter((item) => {
    return dataIndex == item.SrNo;
  });

  useEffect(() => {
    setSrNo(selectEditItem[0].SrNo);
    setExpense(selectEditItem[0].Expense);
    setDate(selectEditItem[0].Date);
    setCategory(selectEditItem[0].Category);
    setAmount(selectEditItem[0].Amount);
  },[data]);
  console.log(selectEditItem);

  const handleSubmit = (e)=>{

    e.preventDefault();

    handleEditTrnsaction({
      SrNo : SrNo,
      Expense : expense,
      Date : date,    
      Category : category,
      Amount : parseFloat(amount)
    })
    notify()
  }

  

  

  return (
    <div className="modal-container">
      <div className="modal-inner-div">
        <button
          type="button"
          className="expense-exit-button"
          onClick={() => setEditModal(false)}
        >
          x
        </button>
        <form onSubmit={handleSubmit}>
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
              value={SrNo}
              readOnly
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
              value={expense}
              onChange={(e) => {
                handleExpense(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="date"> Date</label>
          </div>
          <div className="input-div">
            <input
              id="date"
              type="date"
              className="input-style"
              value={date}
              onChange={(e) => {
                handleDate(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="category">Select Category</label>
          </div>
          <div className="input-div">
            <select
              id="category"
              className="input-style"
              value={category}
              onChange={(e) => {
                handleCategory(e.target.value);
              }}
            >
              <option>Select Options</option>
              <option>Food & Drinks</option>
              <option>Groceries</option>
              <option>Travel</option>
              <option>Health</option>
            </select>
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
              value={amount}
              onChange={(e) => {
                handleAmount(e.target.value);
              }}
            />
          </div>
          <button className="add-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditModal;
