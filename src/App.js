import { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Redirect,
  Prompt,
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
import EditEmp from "./Compoenets/EditEmp";

export default function App({ Data }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user-info"));


  const [View, setView] = useState(true);

  const navigateToEmpList = () => {
    navigate("/emplist");
  };
  const navigateToAddEmp = () => {
    navigate("/addemp");
  };
  const navigateToEditEmp = () => {
    navigate("/editemp");
  };

  const navigateToRegisteration = () => {
    setView(!View);
    navigate("/registration");
  };

  const navigateToLogin = () => {
    setView(!View);
    navigate("/");
  };
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  const userSection = () => {
    navigate("/addemp");
    navigate("/emplist");
  };

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
                {View ? (
                  <Button onClick={navigateToRegisteration} color="inherit">
                    SignUp
                  </Button>
                ) : (
                  <Button onClick={navigateToLogin} color="inherit">
                    Login
                  </Button>
                )}
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main compoenent Routes */}
      {user ? (
        <>
          <Routes>
            {View ? (
              <>
                <Route path="/emplist" element={<EmpList />} />
                <Route path="/editemp/:id" element={<EditEmp />} />
              </>
            ) : (
              <>
                <Route path="/addemp" element={<AddEmp />} />
                <Route path="/editlist" element={<EditEmp />} />
              </>
            )}
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
}
