import * as React from 'react';
import styled from "styled-components";
import { Avatar, List, ListItemAvatar, ListItem, Typography, Grid, IconButton, ListItemText, Button, Paper, TablePagination, TableContainer, Table, TableBody, TableRow, TableCell, TableHead, Box, Checkbox, FilledInput, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextareaAutosize, TextField, SelectChangeEvent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoodIcon from '@mui/icons-material/Mood';
import ModeIcon from '@mui/icons-material/Mode';
import { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRequired } from '../common/ts/useRequired';

export default function EmpList() {

    const [visibility, setVisibility] = useState(false);


    function generate(element: React.ReactElement) {
        return [0, 1, 2, 4, 5].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <>
            <Header>Employer List</Header>
            <Container>
                <Grid xs={12}>
                    <Typography variant="h6" component="div">
                        List of Employers
                    </Typography>
                    <List dense={dense}>
                        {generate(
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>

                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <MoodIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="#ID"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemText
                                    primary="Full Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemText
                                    primary="Eduction"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemText
                                    primary="Email"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemText
                                    primary="Status"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>,
                        )}
                    </List>
                </Grid>
            </Container>
        </>
    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
background: white;
margin: 5% 5%;
padding:2%;
gap: 30px;
`;
const Header = styled.h1`
text-align: center;
`;
// const Singlelist = styled.div`
// display: flex;
// background-color:black;
// gap: 3%;
// `;