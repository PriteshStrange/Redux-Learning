import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom"

const Edit = () => {
  const [input,setInput] = useState({name:"",email:"",number:""});
  const data = useSelector((state) => state.contactReducer);
  const { id } = useParams();
  const findData = data.find((val) => val.id == id);
  const dispatch = useDispatch();
    const history = useNavigate();

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setInput({...input,[name]:value});
    }

    useEffect(()=>{
      if(findData){
        const {name,email,number} = findData
        setInput({name,email,number})
      }
    },[findData]);

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
        id:parseInt(id),
        name,
        email,number
      }
      dispatch({type:"Update_contact",payload:constactData});
      history("/");
      if(!name || !email || !number){
          return alert("All fields are required")
      }
    }
  return (
    <div className="container-fluid">
      {findData ? (
        <>
          <h3 className="text-center text-dark py-3 display-2">Edit Post</h3>
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
                    className="btn  btn-dark"
                    type="submit"
                    value="Edit data"
                  />

                  <Link
                    to="/"
                    className="btn btn-danger mr-3"
                    style={{ marginLeft: "20px" }}
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h3 className="text-center text-dark py-3 display-2">
         This {id} is not exists
        </h3>
      )}
    </div>
  );
};

export default Edit;
