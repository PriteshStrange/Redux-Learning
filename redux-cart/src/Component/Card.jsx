import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import CardData from './CardData';
import './style.css'
import { Add } from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const Cards = () => {
  const dispatch = useDispatch();
    const [data,setData] = useState(CardData);
    const sendData = (e) =>{
      dispatch(Add(e))
    }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
        <div  className="row d-flex justify-content-center align-items-center">
        {
            data.map((val,id)=>{
                const {rname,imgdata,price} = val;
                return (
                    <>
                    <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                        <Card.Img variant="top" style={{height:"16rem"}} className="mt-3"  src={imgdata} />
                        <Card.Body>
                            <Card.Title>{rname}</Card.Title>
                            <Card.Text>
                            Price: {price}
                            </Card.Text>
                            <Button onClick={() => sendData(val)} variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    </>
                )
            })
        }
        

        </div>
    </div>
  )
}

export default Cards