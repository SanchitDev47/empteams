import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcomepage from './Welcomepage';
import Defaultpage from './Defaultpage';


export default function NavHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Techovarya
          </Typography>
          <Button id="welcomepage" color="inherit">Home</Button>
          <Button color="inherit">PROFILE</Button>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/welcomepage" element={<Welcomepage />}>Home</Route>
          <Route path="/defaultpage" element={<Defaultpage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}