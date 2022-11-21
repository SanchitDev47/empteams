import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

export default function UserView() {
    const navigate = useNavigate();

    
    const navigateToEmpList = () => {
      navigate("/emplist");
    };
    const navigateToAddEmp = () => {
      navigate("/addemp");
    };
  return (

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
      {/* <Button onClick={navigateToAddEmp} color="inherit">
        LogOut
      </Button> */}
    </Toolbar>
  </AppBar>
  )
}
