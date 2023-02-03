import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const data = useSelector((state) => state.FormReducer.formData);
  const [search, setSearch] = useState("");
  

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <input
          type="text"
          value={search}
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <NavLink to="/">Bootstrap</NavLink>
        {location.pathname !== "/add" && (
          <NavLink to="/add" className="btn btn-primary">
            Add Data
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
