import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Delete } from "../redux/action/formAction";

const Home = () => {
  const [data, setData] = useState([]);
  const datas = useSelector((state) => state.FormReducer.formData);

  useEffect(() => {
    setData(datas);
  }, [datas]);

  const dispatch = useDispatch();
  const delData = (Id) => {
    dispatch(Delete(Id));
  };
  const key = ["city", "email", "password", "state", "zip"];

  const [search, setSearch] = useState("");

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th colSpan="2">Operation</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {return item?.city?.toLowerCase().includes(search)})
            .map((val) => {
              const { city, email, password, state, zip, id } = val;
              let i = 0;
              return (
                <tr key={id}>
                  <th scope="row">{i++}</th>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{city}</td>
                  <td>{state}</td>
                  <td>{zip}</td>
                  <td>
                    <NavLink to={`/add/${id}`} className="btn btn-primary">
                      Edit
                    </NavLink>
                  </td>
                  <td>
                    <button
                      onClick={() => delData(id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
