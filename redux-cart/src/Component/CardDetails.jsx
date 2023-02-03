import React,{useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Remove,RemoveSingle ,Add} from "../redux/actions/action";

const CardDetails = () => {
  const getData = useSelector((state) => state.cartReducer.cart);
  const {id} = useParams();
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const histroy = useNavigate();

  const compareData = () =>{
    let compare = getData.filter((val) => val.id == id);
    setData(compare);
  }

  useEffect(()=>{
    compareData();
  },[id]);

  const sendData = (ele) =>{
    dispatch(Add(ele));
  }

  const decData = (ele) =>{
    dispatch(RemoveSingle(ele))
  }

  const del =(id) =>{
    dispatch(Remove(id));
    histroy("/")
  };
  return (
    <div className="container mt-2">
      <h2 className="text-center">Iteams Details Page</h2>
    {
        data.map((val)=>{
          const {address,imgdata,price,qnty,rating,rname,somedata,id} = val;
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
                        <p> <strong>Dishes</strong>  :{address} </p>
                        <p> <strong>Total</strong>  :₹ {price * qnty} </p>
                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                        <span style={{fontSize:24}} onClick={qnty <= 1 ? ()=> del(id) : () => decData(val)}>-</span>
                        <span style={{fontSize:22}}>{qnty}</span>
                        <span style={{fontSize:24}} onClick={()=> sendData(val)}>+</span>
    
                        </div>
    
                      </td>
                      <td>
                        <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {rating}★	</span></p>
                        <p><strong>Order Review :</strong> <span >{somedata}	</span></p>
                        <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => del(id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
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
  );
};

export default CardDetails;
