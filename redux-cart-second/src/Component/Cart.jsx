import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CartData';
import { useDispatch } from "react-redux";
import { Add } from '../redux/Action/cartAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () =>{
    const dispatch = useDispatch();
    const [data,setData] = useState(Cardsdata);
    const notify = () => toast("Data added Sucessfully");
    const addData = (ele) =>{
        dispatch(Add(ele));
        notify();        
    }
    return (
        <div className='container mt-3'>
          <h2 className='text-center'>Add to Cart Project</h2>
            <div  className="row d-flex justify-content-center align-items-center">
                {
                    data.map((val)=>{
                        const {rname,price,imgdata,id} = val;
                        return (
                            <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                            <Card.Img variant="top" style={{height:"16rem"}} className="mt-3"  src={imgdata}/>
                                <Card.Body>
                                    <Card.Title>{rname}</Card.Title>
                                    <Card.Text>
                                    Price: {price}
                                    </Card.Text>
                                    <Button onClick={() => addData(val)} variant="primary">Add to Cart</Button>
                                    <ToastContainer />
                                </Card.Body>
                            </Card>
                        )
                    })
                }
           
            </div>
            </div>
    )
}

export default Cart