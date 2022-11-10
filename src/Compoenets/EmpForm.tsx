import { Checkbox, Box, Grid, TextField } from '@mui/material'
import React from 'react'

export default function EmpForm() {
    return (
        <Box sx={{ p: 5, boxShadow: 10, height: '500px', width: '50%', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
            <Grid container spacing={5}>
                <Grid item lg={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                    />
                </Grid>
                <Grid item lg={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                    />
                </Grid>
                <Grid item lg={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mobile"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Discription"
                    />
                </Grid>
            </Grid>
            <Checkbox color="primary" />
            {/* <Checkbox color="primary" label="DFG" /> */}
            {/* <Checkbox color="primary" label="HeDFGDFGld!" /> */}
            {/* <Checkbox color="primary" label="HeDFGld!" /> */}
            {/* <Checkbox color="primary" label="HeDFG!" /> */}
        </Box>

    )
}
