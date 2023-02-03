import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/action/formAction';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [input,setInput] = useState({fname:'',email:'',contact:'',address:''});
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value})
    }

    const {fname,email,contact, address} = input;
    const handleSubmit = (e)  =>{
        e.preventDefault();
        if(!fname || !email || !contact || !address ){
            setError("All fields are Required")
        }else{
            dispatch(addUsers(input));
            setError("");
            navigate("/")
        }
    }
  return (
    <div>
        {error &&  <h3 style={{color:"red"}}>{error}</h3>}
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" type="text" name='fname' label="Name" value={input.fname} onChange={handleChange} variant="outlined" /><br></br>
            <TextField id="outlined-basic" type="email" name='email' label="Email" value={input.email} onChange={handleChange} variant="outlined" /><br></br>
            <TextField id="outlined-basic" type="number" name='contact' label="Contact" value={input.contact} onChange={handleChange} variant="outlined" /><br></br>
            <TextField id="outlined-basic" type="text" name='address' label="Address" value={input.address} onChange={handleChange} variant="outlined" /><br></br>
            <Button variant="contained" type="submit" color="success">Add</Button>
        </form>
    </div>
  )
}

export default AddUser