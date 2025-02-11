import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import FinancialStatus from "./components/FinancialStatus";
import EventComponent from "./components/Event";
import Header from "./components/Header";
import additLogo from "./assets/addit-icon.svg";
import espenseLogo from "./assets/expense-icon.svg";
import ExpenseModal from "./components/Expense-Modal";
import ExpenseTable from "./components/Expense-table";
import BudgetModal from "./components/Budget-Modal";
import ShowUserName from "./components/showUserName";
import DeleteModal from "./components/Delete-Modal";
import EditModal from "./components/Edit-Modal";
import { ToastContainer } from "react-toastify";

function App() {
  const [data, setData] = useState([]);
  const [budget, setBudget] = useState(0);
  const [expenseModal, setExpenseModal] = useState(false);
  const [budgetModal, setBudgetModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [displayData, setDisplayData] = useState(data);
  const [deleteModal, setDeleteModal] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);
  const [editModal, setEditModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  // console.log("app",dataIndex);

  const handleAddBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handleExpenseData = (newData) => {
    setData(newData);
  };

  // console.log(data)

  // useEffect(() => {
  //   setDisplayData(data);
  // }, [data]);

  const handleDataIndex = (id) => {
    setDataIndex(id);
  };

  useEffect(() => {
    const sumAllAmount = data.reduce((acc, item) => acc + item.Amount, 0);
    setTotalAmount(sumAllAmount);
  }, [budget, data, expenseModal]);
  // console.log(displayData)

  const handleEditTrnsaction = (expense) => {
    let transation = data.map((data) => {
      if (dataIndex === data.SrNo) {
        return expense;
      } else {
        return data;
      }
    });
    setData(transation);
    setEditModal(false);
  };

  const handleButtons = (value) => {
    let categoryBtn = data.filter((item) => {
      return item.Category == value;
    });
    setDisplayData(categoryBtn);
    console.log(categoryBtn);
  };
  const handleAllData = () => {
    setDisplayData(data);
  };
  const handleSearch = (value) => {
    let foundExpenseName = data.filter((item) => {
      return item.Expense.includes(value);
    });
    setDisplayData(foundExpenseName);
    console.log(foundExpenseName);
  };

  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  return (
    <div>
      <ToastContainer />
      {editModal && (
        <EditModal
          setEditModal={setEditModal}
          dataIndex={dataIndex}
          displayData={displayData}
          setData={setDisplayData}
          handleEditTrnsaction={handleEditTrnsaction}
          data={data}
        />
      )}
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          setData={setData}
          dataIndex={dataIndex}
          data={displayData}
          isActive={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      {expenseModal && (
        <ExpenseModal
          data={displayData}
          changeExpenseData={handleExpenseData}
          setExpenseModal={setExpenseModal}
          dataIndex={dataIndex}
        />
      )}
      {budgetModal && (
        <BudgetModal
          budget={budget}
          budgetChange={handleAddBudget}
          setBudgetModal={setBudgetModal}
        />
      )}
      <Header />
      <div id="container">
        <ShowUserName name={"Amaan Ansari"} />
        <div className="financial-wrapper">
          <FinancialStatus
            title={"Your Budget"}
            budget={budget}
            icon={additLogo}
          />
          <FinancialStatus
            title={"Total Expense"}
            budget={totalAmount}
            icon={espenseLogo}
          />
          <FinancialStatus
            title={"Remaining Budget"}
            budget={budget - totalAmount}
            icon={espenseLogo}
          />
        </div>
        <EventComponent
          setExpenseModal={setExpenseModal}
          setBudgetModal={setBudgetModal}
          handleButtons={handleButtons}
          handleSearch={handleSearch}
          handleAllData={handleAllData}
          isActive={activeCategory}
          setActiveCategory={setActiveCategory}
        />
          <ExpenseTable
            data={displayData}
            setEditModal={setEditModal}
            changeExpenseData={handleExpenseData}
            setDeleteModal={setDeleteModal}
            handleDataIndex={handleDataIndex}
          />
      </div>
    </div>
  );
}

export default App;
