import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Box, Grid, Button, TextField, FormGroup, FormControlLabel, TextareaAutosize, Checkbox, InputLabel, MenuItem, FormControl, Select, Switch, SelectChangeEvent, RadioGroup, FormLabel, Radio, OutlinedInput, InputAdornment, IconButton, Input, FilledInput } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Route, Routes, useNavigate } from 'react-router';
import styled from "styled-components";
import AddEmp from './AddEmp';
import EmpList from './EmpList';
import LoggedIn from './LoggedIn';


export default function LoginForm() {
    // const [LoggedIn, setLoggedIn] = React.useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const navigate = useNavigate();
    
    interface State {
        amount: string;
        password: string;
        weight: string;
        weightRange: string;
        showPassword: boolean;
    }

    const navigateToEmpList = () => {
        navigate("/emplist");
      };
      const navigateToAddEmp = () => {
        navigate("/addemp");
      };

    // Click Event Function
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data));
        navigate('/LoggedIn')

    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
        <Header>Login With Techovarya</Header>
        <Grid container spacing={1}  sx={{ justifyContent: 'center',marginTop: '5%' }}>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <TextField sx={{ width: '100%', }} {...register("Email")} label="Email" variant="filled" required />
                <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button  type='submit' onClick={navigateToAddEmp} variant="contained" color="primary">
                    Login
                </Button>
            </Form>
        </Grid>

        <Routes>
        <Route path="/loggedin" element={<LoggedIn />} />
        <Route path="/emplist" element={<EmpList />} />
        <Route path="/addemp" element={<AddEmp />} />

        </Routes>

        </>
    )
}
const Form = styled.form`
display:flex;
flex-direction:column;
background: #FFFFFF;
height:100%;
top: 40%;
weight:100%;
padding: 3%;
gap: 30px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;
const Header = styled.h1`
text-align: center;
`;