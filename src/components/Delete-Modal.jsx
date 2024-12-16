import exclamation from "../assets/exclamation.png"
import {toast } from 'react-toastify';
function DeleteModal({setDeleteModal,setData,dataIndex,data}) {
  const notify = () => toast("Delete Successfully!");

    const handleDeleteData =(value)=>{
        // value.preventDefault()
      let removeData = data.filter((item,index)=>{
        return index+1 !== value
        // console.log("data index",item.SrNo
      })
      setData(removeData)
      console.log(value)
      notify()
    }
  return (
    <div className="modal-container">
      <div className="delete-modal">
       <img src={exclamation}/>
       <p>Are You Sure ?</p>
       <span>Do you really want delete this transaction</span>
        <div>
          <button type="button" className="cancel-btn" onClick={()=>(setDeleteModal(false))}>Cancel</button>
          <button type="button" className="delete-btn" onClick={()=>(handleDeleteData(dataIndex),setDeleteModal(false))}>Delete</button>
        </div>
      </div>
     </div>
  );
}

export default DeleteModal;
