import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductContainer from './ProductContainer';
import { setProducts } from '../redux/action/productAction';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async() =>{
        const resp = await axios.get(`https://fakestoreapi.com/products`).catch(err => console.log("ERROR =>", err));
        dispatch(setProducts(resp.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
  return (
      <div className='ui grid container'>
        <ProductContainer/>
      </div>
  )
}

export default ProductListing