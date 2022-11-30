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
import { Button, TextField } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../context/GlobalState";





export default function EmpList() {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => { getEmp(); }, [])

    const { editEmp, employer } = useContext(GlobalContext);
    // 
    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>
    ) {
        return <Slide direction="down" ref={ref} {...props} />;
    });


    function getEmp() {
        fetch('http://localhost:5000/emplist')
            .then(result => result.json())
            .then(res => setData(res))
    }

    function handleConfirmation(id: number) {
        fetch(`http://localhost:5000/emplist/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then(() => {
                setData(data?.filter((employee: { id: number; }) => employee.id !== id));
            })
        })
        setOpen(false);
    }


    const handleDilogBox = () => {
        setOpen(!open);
    };

    function handleEditEmp(id: number) {
        const dataEmp = fetch(`http://localhost:5000/emplist/${id}`, {
            method: 'GET'
        })
        // .then(() => (dataEmp.json())).then(() => {console.log(dataEmp)})
        console.log(dataEmp);
        navigate(`/editemp/${id}`)
        editEmp(id);
    }

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
                                <TableCell component="th" scope="row">{row.FirstName}{employer}</TableCell>
                                <TableCell>{row.eduction}</TableCell>
                                <TableCell>{row.email}</TableCell>

                                <TableCell><AppRegistrationSharpIcon onClick={() => handleEditEmp(row.id)} /></TableCell>
                                <TableCell>
                                    <DeleteIcon onClick={() => handleDilogBox()} />

                                    {open && <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        onClose={handleDilogBox}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"Confirmation"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                Sure, You want to Remove {row.FirstName}
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleDilogBox}>NO</Button>
                                            <Button onClick={() => handleConfirmation(row.id)}>Sure</Button>
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


