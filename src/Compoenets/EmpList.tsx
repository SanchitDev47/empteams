import * as React from 'react';
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, List, ListItemAvatar, ListItem, Typography, Grid, IconButton, ListItemText, Button, Paper, TablePagination, TableContainer, Table, TableBody, TableRow, TableCell, TableHead, Box, Checkbox, FilledInput, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextareaAutosize, TextField, SelectChangeEvent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoodIcon from '@mui/icons-material/Mood';
import ModeIcon from '@mui/icons-material/Mode';
import { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EmpList() {

    const [visibility, setVisibility] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <List dense={dense}>
                        {generate(
                            <ListItem
                                secondaryAction={
                                    <>
                                        <EditIcon  />
                                        <DeleteIcon onClick={handleClickOpen} />
                                        <Dialog
                                            open={open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle>{"Confirmation"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description">
                                                    Sure, You want to delete Employer
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>NO</Button>
                                                <Button onClick={handleClose}>Sure</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </>
                                }
                            >
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
            </Container >
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