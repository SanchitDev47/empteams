import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";


export default function EmpList() {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/registration')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    
    const  handleDilogBox = async (id: any) => {
        setOpen(!open);
        console.log(id)
        let res = await fetch(`http://localhost:5000/registration?id=${id}`, {
            method: 'GET'
        })
        let user = await res.json();
        if (user.id == id) {
            console.log('user id is delete')
        }
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#IDs</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Eduction</TableCell>
                            <TableCell>Email</TableCell>
                            {/* <TableCell>Status</TableCell> */}
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: any, index: number) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell component="th" scope="row">{row.FirstName}</TableCell>
                                <TableCell>{row.eduction}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                {/* <TableCell>{row.status}</TableCell> */}
                                <TableCell><AppRegistrationSharpIcon /></TableCell>
                                <TableCell>
                                    <DeleteIcon onClick={() => handleDilogBox(row.id)} />
                                    {open && <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        onClose={handleDilogBox}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"Confirmation"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                Sure, You want to delete Employer
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleDilogBox}>NO</Button>
                                            <Button onClick={handleDilogBox}>Sure</Button>
                                        </DialogActions>
                                    </Dialog>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    );
}