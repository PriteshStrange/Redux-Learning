import React,{useState} from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSingleUser, updateUser } from '../redux/action/formAction';

const EditUser = () => {
    const {id} = useParams();
    const [input,setInput] = useState({fname:'',email:'',contact:'',address:''});
    const [error,setError] = useState("");
    const {user} = useSelector(state => state.data);
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
            dispatch(updateUser(input,id));
            setError("");
            navigate("/")
        }
    }

    useEffect(()=>{
        dispatch(getSingleUser(id))  
   },[id]);

   useEffect(()=>{
        setInput({...user})
   },[user])

  return (
    <div>
        {error &&  <h3 style={{color:"red"}}>{error}</h3>}
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" type="text" name='fname' label="Name" value={fname || ''} onChange={handleChange} variant="outlined" /><br></br>
            <TextField id="outlined-basic" type="email" name='email' label="Email" value={email || ''} onChange={handleChange} variant="outlined" /><br></br>
            <TextField id="outlined-basic" type="number" name='contact' label="Contact" value={contact || ''} onChange={handleChange} variant="outlined" /><br></br>
            <TextField id="outlined-basic" type="text" name='address' label="Address" value={address || ''} onChange={handleChange} variant="outlined" /><br></br>
            <Button variant="contained" type="submit" color="success">Add</Button>
        </form>
    </div>
  )
}

export default EditUser