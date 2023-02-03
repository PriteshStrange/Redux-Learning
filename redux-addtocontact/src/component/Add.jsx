import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate} from "react-router-dom"

const Add = () => {
  const data = useSelector((state) => state.contactReducer);
  const [input,setInput] = useState({name:"",email:"",number:""});
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (e) =>{
     const name = e.target.name;
     const value = e.target.value;
     setInput({...input,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {name,email,number} = input;

    const checkEmail = data.find((val)=> val.email === email && email);
    const checkPhno = data.find((val)=> val.number == number && number);

    if(checkEmail){
      alert("Email is already exists");
    }

    if(checkPhno){
      alert("Phone number is already registered");
    }

    const constactData = {
      id:data[data.length -1].id +1,
      name,
      email,number
    }
    dispatch({type:"Add_contact",payload:constactData});
    history("/");
    if(!name || !email || !number){
        return alert("All fields are required")
    }
  }

  return (
    <div className="container-fluid">
    <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
    <div className="row">
      <div className="col-md-6 p-5 mx-auto shadow">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Full name"
              name='name'
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name='email'
              value={input.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Phone"
              name='number'
              value={input.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
            style={{marginTop:"15px"}}
              className="btn btn-dark"
              type="submit"
              value="Add Student"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Add