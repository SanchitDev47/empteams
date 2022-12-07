import { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  PrivateRoute,
  useNavigate,
  Redirect,
  Prompt,
} from "react-router-dom";
import Alert from "@mui/material/Alert";
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
import { GlobalContext } from "./context/GlobalState";

export default function App() {
  const navigate = useNavigate();
  
  const { getUserToken } = useContext(GlobalContext);

  const user = JSON.parse(localStorage.getItem("access-token"));

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

  const navigateToRegistration = () => {
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
                  Employers
                </Button>
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              </>
            ) : (
              <>
                {View ? (
                  <>
                    <Button onClick={navigateToRegistration} color="inherit">
                      SignUp
                    </Button>
                  </>
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
      {/* <GlobalProvider> */}
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
      {/* </GlobalProvider> */}
{/* 
      <Switch>
        <PrivateRoute exact path='/addemp' component={AddEmp} />
        <PrivateRoute exact path='/emplist' component={EmpList} />
        <PrivateRoute exact path='/editemp/:id' />
        <Route exact path='/' component={Login} />
        <Route exact path='/registration' component={Registration} />
      </Switch> */}
    </>
  );
}
