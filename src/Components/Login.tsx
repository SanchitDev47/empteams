import { VisibilityOff, Visibility, Password, FiberNew, FunctionsOutlined, SnippetFolder } from '@mui/icons-material';
import { Box, Grid, Button, TextField, FormGroup, FormControlLabel, TextareaAutosize, Checkbox, InputLabel, MenuItem, FormControl, Select, Switch, SelectChangeEvent, RadioGroup, FormLabel, Radio, OutlinedInput, InputAdornment, IconButton, Input, FilledInput } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Route, Routes, useNavigate } from 'react-router';
import styled from "styled-components";
import { GlobalContext } from '../context/GlobalState';
import * as jose from 'jose'
import jwtDecode from "jwt-decode";

export default function LoginForm() {

    const { getUserToken } = useContext(GlobalContext);
    const { register, control, handleSubmit, formState: { errors }, setError } = useForm();
    const [values, setValues] = React.useState<any>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const navigate = useNavigate();


    // useEffect(() => {
    //     // localStorage.getItem('access-token')
    //     console.log('useEffect')
    //     // eslint-disable-next-line
    // }, [])

    //    const GenerateJwtToken = async (employer: any) => {
    //         const secretKey = new TextEncoder().encode(
    //             'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
    //         )
    //         const alg = 'HS256'
    //         const jwtToken = await new jose.SignJWT({ 'urn:employer:claim': true })
    //             .setProtectedHeader({ alg })
    //             .setIssuedAt(employer)
    //             .setIssuer('urn:employer:issuer')
    //             .setAudience('urn:employer:audience')
    //             .setExpirationTime('1m')
    //             .sign(secretKey)
    //         localStorage.setItem('access-token', JSON.stringify(jwtToken))
    //         const decodedJwt: any = jwtDecode(jwtToken);
    //     }

    //     const JwtTokenExp = (decodedJwt: any) => {
    //         let currentDate = new Date();
    //         if (decodedJwt.exp * 2000 < currentDate.getTime()) {
    //             localStorage.clear();
    //             console.log("Token expired.");
    //             navigate('/')
    //         } else {
    //             console.log("Valid token");
    //         }
    //         console.log(decodedJwt.exp);
    //     }


    // Click Event Function
    const onSubmit = async (employer: any) => {
        // GenerateJwtToken(employer);
        const res = await fetch(`http://localhost:5000/emplist?email=${employer.email}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        });
        let user = await res.json();
        if (user.length > 0) {
            if (employer.password == user[0].password) {
                // localStorage.getItem('access-token');
                alert("User Successfully logged In")
                getUserToken(employer);
            } else {
                setError("password", { type: 'manual', message: 'Password is Wrong' })
            }
        } else {
            setError("email", { type: 'manual', message: 'email does not exist' })
            alert("first create employer")
            navigate("/")
        }
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

    return (
        <>
            <Header>Login With Techovarya</Header>
            <Grid container spacing={1} sx={{ justifyContent: 'center', }}>
                <Box sx={{
                    top: '40%',
                    height: '100%',
                    weight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#FFFFFF',
                    padding: '3%',
                    gap: '15px',
                    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
                }}>
                    <TextField sx={{ width: '100%', }}
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "give email format"
                            }
                        },)} name="email" label="Email" type="email" variant="filled" />
                    {errors.email && <p role="alert" style={{ color: "red" }}>{`${errors.email.message}`}</p>}

                    <FormControl variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <Controller name="password" control={control} rules={{
                            required: "this field is required",
                        }} render={({
                            field: { onChange, value },
                        }) =>
                            <FilledInput
                                id="filled-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={value}
                                onChange={onChange}
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
                            />} />
                        {errors.password && <p role="alert" style={{ color: "red" }}>{`${errors.password.message}`}</p>}

                    </FormControl>
                    <Button onClick={handleSubmit(onSubmit)} type='submit' variant="contained" color="primary">
                        Login
                    </Button>
                </Box>
            </Grid>
        </>
    )
}
const Header = styled.h1`
text-align: center;
`;

