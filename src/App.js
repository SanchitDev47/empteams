import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Redirect,
  Prompt
} from "react-router-dom";
import Registration from "./Compoenets/Registration";
import Login from "./Compoenets/Login";
import EmpList from "./Compoenets/EmpList";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./App.css";
import AddEmp from "./Compoenets/AddEmp";

export default function App() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user-info"));

  const navigateToEmpList = () => {
    navigate("/emplist");
  };
  const navigateToAddEmp = () => {
    navigate("/addemp");
  };

  const navigateToRegisteration = () => {
    navigate("/registration");
  };

  const navigateToLogin = () => {
    navigate("/");
  };
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  const userSection = () => {
    navigate("/addemp");
    navigate("/emplist");

  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Techovarya
            </Typography>
            {user ? (
              <>
                <Button onClick={navigateToAddEmp} color="inherit">
                  Add employer
                </Button>
                <Button onClick={navigateToEmpList} color="inherit">
                  Epmployer
                </Button>
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={navigateToRegisteration} color="inherit">
                  SignUp
                </Button>
                <Button onClick={navigateToLogin} color="inherit">
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main compoenent Routes */}
      {user ? (
        <>
          <Routes>
            <Route path="/emplist" element={<EmpList />} />
            <Route path="/addemp"  element={<AddEmp />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/"  element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
}
