import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Add, Update } from "../redux/action/formAction";

const Form = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.FormReducer);
  const findData = data.formData.find((val) => val.id === id);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
    city: "",
    state: "",
    zip: "",
  });
  const [editing, setEditing] = useState(false);

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    if (findData) {
      const { city, email, id, password, state, zip } = findData;
      setInput({ city, email, id, password, state, zip });
      setEditing(!editing);
    }
  }, [findData]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      const { email, password, city, state, zip } = input;
      const updatedData = { email, password, city, state, zip, id };
      dispatch(Update(updatedData));
      history("/");
    } else {
      dispatch(Add(input));
      history("/");
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              value={input.email}
              name="email"
              className="form-control"
              onChange={handelChange}
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              value={input.password}
              name="password"
              className="form-control"
              onChange={handelChange}
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              name="city"
              value={input.city}
              className="form-control"
              onChange={handelChange}
              id="inputCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select
              name="state"
              value={input.state}
              onChange={handelChange}
              id="inputState"
              className="form-control"
            >
              <option value="Gujarat">Gujarat</option>
              <option value="Tamil">Tamil</option>
              <option value="MP">MP</option>
              <option value="UP">UP</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input
              name="zip"
              value={input.zip}
              onChange={handelChange}
              type="text"
              className="form-control"
              id="inputZip"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {editing ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
