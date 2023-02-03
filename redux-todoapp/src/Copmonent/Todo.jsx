import React,{useState} from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { editData, Remove } from "../redux/action/action";

const Todo = () => {
  const dispatch = useDispatch()
  const [show,setShow]= useState(false);
  const [showValue,setShowValue] = useState("");
  const handleClose = () => setModal(false);
  const [modal,setModal] = useState(false);
  const [editing,setEditing] = useState("");
  const [editingId,setEditingId] = useState("");
  const { userData } = useSelector((state) => state.todoReducer);

  const removeData = (Id) =>{
    dispatch(Remove(Id))
  }

  const handelShow = (ele) =>{
    setModal(true);
    console.log("object",modal);
    setEditing(ele);
  }

  const updateTask= () =>{
    dispatch(editData(editing,editingId));
    handleClose()
  }
  
  return (
    <>
      <div className="todo_data col-lg-5 ma-auto mt-2">
        {userData.map((val, k) => {
          return (
            <div
              key={k}
              className="todo_container mb-2 d-flex justify-content-between align-items-center"
              style={{
                background: "#dcdde1",
                borderRadius: "3px",
                height: "45px",
              }}
            >
              <li style={{ listStyle: "none" }}>{val}</li>
              <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                <ModeEditIcon onClick={() => {
                  handelShow(val)
                  setEditingId(k)
                }}  style={{ color: "#3c40c6", cursor: "pointer" }} />
                <DeleteIcon onClick={() => removeData(k)} style={{ color: "red", cursor: "pointer" }} />
                <RemoveRedEyeIcon onClick={()=> {
                  setShow(true) 
                  setShowValue(val)}}
                  style={{ color: "#1dd1a1", cursor: "pointer" }}
                />
              </div>
            </div>
          );
        })}

        <Modal show={show} onHide={() => setShow(false)}>
         <h1>{showValue}</h1>
          <Modal.Footer>
            <Button onClick={() => setShow(false)} variant="secondary">
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>

        {/* Update Data */}

        <Modal show={modal} onHide={handleClose}>
          <h3 className="text-center mt-2">Update Your Data</h3>
        <Modal.Header >
            <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                <input name='task' value={editing} onChange={(e) => setEditing(e.target.value)} className='form-control' />
                
            </div>
        </Modal.Header>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateTask()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default Todo;
