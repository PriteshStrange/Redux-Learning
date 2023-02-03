import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Home = () => {
    const data = useSelector(state => state.contactReducer);
    const dispatch = useDispatch();

    const deleteData = (Id) =>{
      dispatch({type:"Delete_contact",payload:Id});
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-5 text-right'>
                <Link to="/add" className='btn btn-outline-dark'> Add </Link>
            </div>
            <div className='col-md-6 mx-auto'>
            <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col" colSpan="2"> Operation</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length ? 
                  data.map((val,ke) => {
                    const {email,id,name,number} = val;
                    return (
                      <tr key={ke}>
                        <td>{ke+1 }</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{number}</td>
                        <td><Link to={`/edit/${id}`} className='btn btn-small btn-primary mr-2'>Edit</Link></td>
                        <td><button onClick={() => deleteData(id)} className='btn btn-small btn-danger'>Remove</button></td>
                      </tr>
                    )
                  })
                 : "No data Found"
              }
            </tbody>
          </table>
            </div>
        </div>
    </div>
  )
}

export default Home