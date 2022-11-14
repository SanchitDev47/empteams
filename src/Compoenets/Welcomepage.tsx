import React from 'react'
import styled from "styled-components";
import { Box, Grid, Button, TextField, FormGroup, FormControlLabel, TextareaAutosize, Checkbox, InputLabel, MenuItem, FormControl, Select, Switch, SelectChangeEvent, RadioGroup, FormLabel, Radio, OutlinedInput, InputAdornment, IconButton, Input } from '@mui/material';
import { useForm } from "react-hook-form";
import { useRequired } from '../common/ts/useRequired';
import { Label, Visibility, VisibilityOff } from '@mui/icons-material';

export default function Welcomepage() {

    //React Hooks
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [age, setAge] = React.useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    interface State {
        amount: string;
        password: string;
        weight: string;
        weightRange: string;
        showPassword: boolean;
    }

    //Custom Hooks
    const validation = useRequired();

    // Click Event Function
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data));
    };

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedValue(event.target.value);
    // };

    const handleDDL = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
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
            <Header>Welcome To Techovarya</Header>
            <SubHeader>SignUp with Techovarya</SubHeader>
            <Grid container spacing={1} sx={{ justifyContent: 'center'  }}>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <TextField sx={{ width: '100%', }}{...register("FirstName")} label="First Name" variant="filled" required />
                        <TextField sx={{ width: '100%', }}{...register("LastName")} label="Last Name" variant="filled" required />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <TextField sx={{ width: '100%', }} {...register("Email")} label="Email" variant="filled" required />
                        <TextField sx={{ width: '100%' }} {...register("Phone Number")} label="Phone Number" variant="filled" required />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                {...register("Password")}
                                required
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                {...register("Password")}
                                required
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{ width: '100%', display: 'flex', gap: '10%' }}>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="standard">
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>


                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <Grid xs={12}>
                                    <FormControlLabel {...register("female")} value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel {...register("male")} value="male" control={<Radio />} label="Male" />
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ width: '100%', display: 'flex', gap: '10%' }} variant="standard">
                            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                            <FormControlLabel  control={<Switch defaultChecked />} label="Active" />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Grid lg={12}>
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
                    </Box>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Eduction</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Eduction"
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
                    <Button type='submit' variant="contained" color="primary" >
                        Signup
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
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;
const Header = styled.h1`
text-align: center;
`;
const SubHeader = styled.h4`
text-align: center;

`;
