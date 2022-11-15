import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./Compoenets/SignUp";
import Login from "./Compoenets/Login";
import EmpList from "./Compoenets/EmpList";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./App.css";
import AddEmp from "./Compoenets/AddEmp";

function App() {
  const [LoggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  const navigateToEmpList = () => {
    navigate("/emplist");
  };
  const navigateToAddEmp = () => {
    navigate("/addemp");
  };

  const navigateToSignUP = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Techovarya
            </Typography>
            <Button onClick={navigateToAddEmp} color="inherit">
              Add Employers
            </Button>
            <Button onClick={navigateToEmpList} color="inherit">
              Employers
            </Button>
            <Button onClick={navigateToAddEmp} color="inherit">
              LogOut
            </Button>
          </Toolbar>
        </AppBar>


        {/*  */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Techovarya
            </Typography>
            <Button onClick={navigateToSignUP} color="inherit">SignUp</Button>
            <Button onClick={navigateToLogin} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main compoenent Routes */}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/emplist" element={<EmpList />} />
        <Route path="/addemp" element={<AddEmp />} />
      </Routes>
    </>
  );
}

export default App;
