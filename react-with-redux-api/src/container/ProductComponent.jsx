import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const ProductComponent = () => {
  const product = useSelector((state) => state.allProducts.products);
  const renderList = product.map((val) =>{
    const {category,id,image,price,title} = val;
    return (
  
      <div className='four column wide'>
        <br></br>
        <NavLink to={`product/${id}`}>
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
  });
  return <>{renderList}</>
}

export default ProductComponent