import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Remove,Add,RemoveSingle } from '../redux/Action/cartAction';

const CartDetails = () => {
    const histroy = useNavigate()
    const [data,setData] = useState([]);
    const {id} = useParams();
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.cartReducer.cart);

    const compareData = () =>{
         let comapre = getData.filter((val) => val.id == id);
         setData(comapre)
    }

    const dele = (Id) =>{
        dispatch(Remove(Id));
        histroy("/");
    }

    const delSingle = (val) =>{
        dispatch(RemoveSingle(val))
    }

    const IncData = (ele) =>{
        dispatch(Add(ele));
    }

    useEffect(()=>{
        compareData()
    },[id])
    return (

        <div className="container mt-2">
            <h2 className="text-center">Iteams Details Page</h2>
            {
                data.map((val) =>{
                    const {address,id,imgdata,qnty,rating,price,rname,somedata} = val;
                    return (

                        <section className="container mt-3">
                            <div className="iteamsdetails">
                                <div className="items_img">
                                <img src={imgdata} alt={rname}/>
                                <div className="details">
                                <Table>
                                    <tr>
                                    <td>
                                        <p> <strong>Restaurant</strong>  : {rname}</p>
                                        <p> <strong>Price</strong>  :  ₹{price}</p>
                                        <p> <strong>Dishes</strong>  : {address}</p>
                                        <p> <strong>Total</strong>  :₹ {price*qnty} </p>
                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                                        <span style={{fontSize:24}} onClick={qnty <= 1 ? () => dele(id) : () => delSingle(val)}>-</span>
                                        <span style={{fontSize:22}}>{qnty}</span>
                                        <span style={{fontSize:24}} onClick={() => IncData(val)}>+</span>
                    
                                        </div>
                    
                                    </td>
                                    <td>
                                        <p><strong>Rating : {rating}</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	</span></p>
                                        <p><strong>Order Review : {somedata}</strong> <span >	</span></p>
                                        <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dele(id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                                    </td>
                                    </tr>
                                </Table>
                                </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }

          </div>
    )
      
  
}
   

export default CartDetails