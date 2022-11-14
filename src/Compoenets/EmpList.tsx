// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowsProp,
//   GridRowModesModel,
//   GridRowModes,
//   DataGridPro,
//   GridColumns,
//   GridRowParams,
//   MuiEvent,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridEventListener,
//   GridRowId,
//   GridRowModel,
// } from '@mui/x-data-grid-pro';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
//   randomId,
// } from '@mui/x-data-grid-generator';

// const initialRows: GridRowsProp = [
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 25,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 36,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 19,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 28,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 23,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
// ];

// interface EditToolbarProps {
//   setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
//   setRowModesModel: (
//     newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
//   ) => void;
// }

// function EditToolbar(props: EditToolbarProps) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// export default function FullFeaturedCrudGrid() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

//   const handleRowEditStart = (
//     params: GridRowParams,
//     event: MuiEvent<React.SyntheticEvent>,
//   ) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleEditClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id: GridRowId) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id: GridRowId) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow!.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow: GridRowModel) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const columns: GridColumns = [
//     { field: 'name', headerName: 'Name', width: 180, editable: true },
//     { field: 'age', headerName: 'Age', type: 'number', editable: true },
//     {
//       field: 'dateCreated',
//       headerName: 'Date Created',
//       type: 'date',
//       width: 180,
//       editable: true,
//     },
//     {
//       field: 'lastLogin',
//       headerName: 'Last Login',
//       type: 'dateTime',
//       width: 220,
//       editable: true,
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGridPro
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
//         onRowEditStart={handleRowEditStart}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         components={{
//           Toolbar: EditToolbar,
//         }}
//         componentsProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </Box>
//   );
// }
























import * as React from 'react';
import styled from "styled-components";
import { Avatar, List, ListItemAvatar, ListItem, Typography, Grid, IconButton, ListItemText, Button, Paper, TablePagination, TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoodIcon from '@mui/icons-material/Mood';



export default function EmpList() {

    interface Column {
        id: 'name' | 'code' | 'population' | 'size' | 'density';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: readonly Column[] = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
        {
            id: 'population',
            label: 'Population',
            minWidth: 170,
            align: 'right',
            format: (value: number) => value.toLocaleString('en-US'),
        },
        {
            id: 'size',
            label: 'Size\u00a0(km\u00b2)',
            minWidth: 170,
            align: 'right',
            format: (value: number) => value.toLocaleString('en-US'),
        },
        {
            id: 'density',
            label: 'Density',
            minWidth: 170,
            align: 'right',
            format: (value: number) => value.toFixed(2),
        },
    ];

    interface Data {
        name: string;
        code: string;
        population: number;
        size: number;
        density: number;
    }

    function createData(
        name: string,
        code: string,
        population: number,
        size: number,
    ): Data {
        const density = population / size;
        return { name, code, population, size, density };
    }

    const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };










    // function generate(element: React.ReactElement) {
    //     return [0, 1, 2, 4, 5].map((value) =>
    //         React.cloneElement(element, {
    //             key: value,
    //         }),
    //     );
    // }
    // const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);


    return (
        <>
            <Button variant="contained">Add Employer</Button>
            <Container>
                <Paper sx={{ width: '100%', justifyContent: 'center', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
        </>


        // <>
        //     <Header>Employer List</Header>
        //     <Button variant="contained">Add Employer</Button>
        //     <Container>
        //         <Grid xs={12}>
        //             <Typography variant="h6" component="div">
        //                 List of Employers
        //             </Typography>
        //             <List dense={dense}>
        //                 {generate(
        //                     <ListItem
        //                         secondaryAction={
        //                             <IconButton edge="end" aria-label="delete">
        //                                 <DeleteIcon />
        //                             </IconButton>
        //                         }
        //                     >
        //                         <ListItemAvatar>
        //                             <Avatar>
        //                                 <MoodIcon />
        //                             </Avatar>
        //                         </ListItemAvatar>
        //                         <ListItemText
        //                             primary="#ID"
        //                             secondary={secondary ? 'Secondary text' : null}
        //                             />
        //                         <ListItemText
        //                             primary="Full Name"
        //                             secondary={secondary ? 'Secondary text' : null}
        //                         />
        //                         <ListItemText
        //                             primary="Eduction"
        //                             secondary={secondary ? 'Secondary text' : null}
        //                         />
        //                         <ListItemText
        //                             primary="Email"
        //                             secondary={secondary ? 'Secondary text' : null}
        //                         />
        //                         <ListItemText
        //                             primary="Status"
        //                             secondary={secondary ? 'Secondary text' : null}
        //                         />
        //                     </ListItem>,
        //                 )}
        //             </List>
        //         </Grid>
        //     </Container>
        // </>
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
// const Header = styled.h1`
// text-align: center;
// `;