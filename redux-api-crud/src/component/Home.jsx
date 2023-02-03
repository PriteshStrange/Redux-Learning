import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { delteUsers, loadUsers } from "../redux/action/formAction";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



const Home = () => {
  const { users } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const delUsers = (Id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(delteUsers(Id));
    }
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <TableContainer component={Paper}>
        <Button variant="contained" onClick={() => navigate("/add")}>Add Data</Button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((val) => (
              <StyledTableRow key={val.id}>
                <StyledTableCell component="th" scope="row">
                  {val.fname}
                </StyledTableCell>
                <StyledTableCell align="center">{val.email}</StyledTableCell>
                <StyledTableCell align="center">{val.contact}</StyledTableCell>
                <StyledTableCell align="center">{val.address}</StyledTableCell>
                <StyledTableCell align="center">
                  <Stack
                    direction="row"
                    style={{ textAlign: "center" }}
                    spacing={2}
                  >
                    <Button variant="contained" onClick={() => navigate(`/editUser/${val.id}`)} color="success">
                      Update
                    </Button>
                    <Button
                      onClick={() => delUsers(val.id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
