import React,{useState} from "react"
import {toast } from 'react-toastify';
function BudgetModal({budgetChange,setBudgetModal}){
    const [saveBudget, setSaveBudget] = useState('')
    const [showErrors , setShowErrors] = useState({})
     
    const handleAddBudget = (e)=>{
       setSaveBudget(e.target.value)
    }
    const validate = ()=>{
        const errors = {};
        
        if(!saveBudget){
            errors.saveBudget = 'Budget is required'
        }
        setShowErrors(errors)
        return Object.keys(errors).length === 0
    }
    const handleClick = () =>{
        // e.preventDefault()
        if(validate()){
        budgetChange(saveBudget)
        setSaveBudget("")
        setBudgetModal(false)
        notify()
        }
    }
    const notify = () => toast("Add Budget Successfully!");

    return(
        <>
        <div className="modal-container">
            <div className="modal-inner-div">
            <button className="budget-exit-button" onClick={()=>(setBudgetModal(false))}>x</button>
                <form>
                <h2 className="popup-head">Add Budget Amount</h2>
                <div>
                    <label htmlFor="amount">Add Amount</label>
                </div>
                <div className="input-div">
                    <input id="amount" min='0' type="number" placeholder="Amount" className="input-style" value={saveBudget} onChange={handleAddBudget}/>
                    <p>{showErrors.saveBudget && <span style={{color:'red'}}>{showErrors.saveBudget}</span>}</p>
                </div>
                <button className="add-btn" type="button" onClick={handleClick}>Add Budget</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default BudgetModal