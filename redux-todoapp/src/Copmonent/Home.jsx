import React, { useState } from 'react';
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/action/action';

const Home = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState("");

    const handleClick = () =>{
        dispatch(Add(data));
        setData("")
    }
  return (
    <>
    <div className="container">
        <section className='mt-3 text-center'>
            <h3>Enter Your Task</h3>

            <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                <input name='task' value={data} onChange={(e) => setData(e.target.value)} className='form-control' />
                <Button onClick={() => handleClick()} variant='contained'
                 style={{ background: "#ee5253" }} className='mx-2'>
                    <AddIcon />
                </Button>
            </div>
        <Todo/>
        </section>

        
    </div>
</>
  )
}

export default Home
