import React from 'react'
import styled from "styled-components";
import { Box, Grid, Button, TextField, FormGroup, FormControlLabel, TextareaAutosize, Checkbox, InputLabel, MenuItem, FormControl, Select, Switch, SelectChangeEvent, RadioGroup, FormLabel, Radio, OutlinedInput, InputAdornment, IconButton, Input, FilledInput, FormHelperText } from '@mui/material';
import { useForm } from "react-hook-form";
import { Email, Label, Visibility, VisibilityOff } from '@mui/icons-material';

export default function Registeration() {

    //React Hooks
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [Education, setEducation] = React.useState('');
    const { register, formState: { errors }, watch, handleSubmit } = useForm();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    // Click Event Function
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data));
    };

    const handleDDL = (event: SelectChangeEvent) => {
        setEducation(event.target.value as string);
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
    console.log(watch("example"));

    const handleChangePass = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleChangeConfirmPass = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <Header>Welcome To Techovarya</Header>
            {/* <SubHeader>SignUp with Techovarya</SubHeader> */}
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <Grid>
                            <TextField sx={{ width: '100%', }} {...register("firstName", { required: true, })} name="firstName" label="First Name" variant="filled" />
                            {errors?.firstName?.type === "required" && <Error>This Feild is required</Error>}
                        </Grid>
                        <Grid>
                            <TextField sx={{ width: '100%', }} {...register("LastName", { required: true, })} name="lastName" label="Last Name" variant="filled" />
                            {errors?.LastName?.type === "required" && <Error>This Feild is required</Error>}
                        </Grid>
                    </Box>
                    
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <Grid>
                            <TextField sx={{ width: '100%' }} {...register("Email", { required: true, })} label="Email" type="email" variant="filled" />
                            {errors?.Email?.type === "required" && <Error>This Feild is required</Error>}
                        </Grid>
                        <Grid>
                            <TextField sx={{ width: '100%' }} {...register("Number", { required: true, })} type="number" label="Phone" variant="filled" />
                            {errors?.Number?.type === "required" && <Error>This Feild is required</Error>}
                        </Grid>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChangePass("password")}
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
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-confirm-password">Confirm Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChangeConfirmPass("Confrimpassword")}
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
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="standard"  >
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                row
                            >
                                <FormControlLabel {...register("female")} value="female" control={<Radio />} label="Female" />
                                <FormControlLabel {...register("male")} value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="standard" >
                            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                            <FormControlLabel control={<Switch />} label="Active" />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <FormControl variant="filled">
                            <Grid>
                                <FormLabel component="legend">Choose Your Hobbies</FormLabel>
                                <FormControlLabel
                                    {...register("Singing")}
                                    control={< Checkbox />} label="Singing"
                                />
                                <FormControlLabel
                                    {...register("bodyBuilding")}
                                    control={< Checkbox />} label="bodyBuilding"
                                />
                                <FormControlLabel
                                    {...register("Photography")}
                                    control={< Checkbox />} label="Photography"
                                />
                                <FormControlLabel
                                    {...register("Painting")}
                                    control={< Checkbox />} label="Painting"
                                />
                                <FormControlLabel
                                    {...register("dacing")}
                                    control={< Checkbox />} label="dacing"
                                />
                                <FormControlLabel
                                    {...register("Art and Craft")}
                                    control={< Checkbox />} label="Art and Craft"
                                />
                            </Grid>
                        </FormControl>
                    </Box>
                    <FormControl variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Eduction</InputLabel>
                        <Select
                            // error
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={Education}
                            onChange={handleDDL}
                        >
                            <MenuItem value={10}>BCA</MenuItem>
                            <MenuItem value={20}>MCA</MenuItem>
                            <MenuItem value={40}>B.Tech</MenuItem>
                            <MenuItem value={50}>M.Tech</MenuItem>
                            <MenuItem value={60}>Under-Graduation</MenuItem>
                            <MenuItem value={70}>Post-Graduation</MenuItem>
                        </Select>
                    </FormControl>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Enter your Discription"
                        maxRows={10}
                        style={{ height: '60px', width: '500' }}
                        {...register("discription")}
                    />
                    <Button type='submit' variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Form>
            </Grid>
        </>
    )
}
const Form = styled.form`
display:flex;
flex-direction:column;
background: #FFFFFF;
height:100%;
weight:100%;
padding: 3%;
gap: 30px;
justify-content: space-around;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;
const Header = styled.h1`
text-align: center;
`;
const SubHeader = styled.h4`
text-align: center;
`;
const Error = styled.p`
color: red;
`;
