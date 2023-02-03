import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProductContainer = () => {
    const product = useSelector((state) => state.allProductData.products);
    const returnData = product.map((val)=>{
        const {id,image,price,title,category} = val
        return (
            
          <div className='four column wide'>
              <NavLink to={`/product/${id}`}>
                
                
              {/* <br></br> */}
              
              <div className='ui link cards'>
                <div className='card'>
                  <div className='image'>
                    <img src={image} alt={title}/>
                  </div>
                  <div className='content'>
                    <div className='header'>{title}</div>
                    <div className='header'> $ {price}</div>
                    <div className='header'>{category}</div>
                  </div>
                </div>
              </div>
              </NavLink>
            </div>
        )
    })
    return <>{returnData}</>
   
}

export default ProductContainer