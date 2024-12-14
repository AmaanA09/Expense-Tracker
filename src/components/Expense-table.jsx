import React from "react"
import deleteLogo from "../assets/bin.png"
import editLogo from "../assets/write.png"

function ExpenseTable({data,setDeleteModal,handleDataIndex,setEditModal}){
    
    return(
        <div  id="expense-table">
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Expense Name</th>
                        {/* <th>Date</th> */}
                        {/* <th>Category</th> */}
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.Expense}</td>
                                {/* <td>{item.Date}</td> */}
                                {/* <td>{item.Category}</td> */}
                                <td>{item.Amount}</td>
                                <td>
                                    <button className="action-button" onClick={()=>(setEditModal(true),handleDataIndex(item.SrNo))}><img src={editLogo}/>Edit</button> 
                                    <button className="action-button" onClick={()=>(setDeleteModal(true) , handleDataIndex(item.SrNo))}><img src={deleteLogo}/>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable