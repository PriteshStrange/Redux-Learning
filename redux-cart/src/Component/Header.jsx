import React, { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import { Remove } from "../redux/actions/action";

const Header = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartReducer.cart);

  const [anchorEl, setAnchorEl] = useState(null);
  const [price,setPrice] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const del = (id) => {
    dispatch(Remove(id));
  };

  const total = () =>{
    let price = 0;
    getData.map((val,key)=>{
      return price = val.price * val.qnty + price;
    });
    setPrice(price);
  }

  useEffect(()=>{
    total()
  },[total])
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light ">
              Home
            </NavLink>
          </Nav>
          
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light "
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: "10" }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Store Data</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((val) => {
                    const { imgdata, rname, price, qnty, id } = val;
                    return (
                      <tr key={id}>
                        <td>
                          <NavLink to={`cart/${id}`} onClick={handleClose}>
                            <img
                              style={{ width: "5rem", height: "5rem" }}
                              src={imgdata}
                              alt={rname}
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{rname}</p>
                          <p>Price : {price}</p>
                          <p>qty : {qnty}</p>
                          <p
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => del(id)}
                          >
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>

                        <td
                          className="mt-5"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => del(id)}
                        >
                          <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    );
                  })}
                  <p className="text-center">Total : {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={() => handleClose()}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Cart is Empty</p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
