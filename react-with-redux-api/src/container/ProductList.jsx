import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/action/productAction';

import ProductComponent from './ProductComponent';

const ProductList = () => {
  const product = useSelector((state) => state.allProducts.products);
  // const {id,title} = product[0];
  const dispatch = useDispatch();

  const fetchProduct = async() =>{
    const resp = await axios.get('https://fakestoreapi.com/products').catch((err)=> console.log("Error",err));
    console.log("respons",resp);
     dispatch( setProducts(resp.data))
  } 

  useEffect(()=>{
    fetchProduct()
  },[]);
  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  )
}

export default ProductList