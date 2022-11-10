import * as React from 'react';
import { Box, Avatar, List, ListItemAvatar, ListItem, Typography, Grid, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoodIcon from '@mui/icons-material/Mood';



export default function LoggedInVeiw() {
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
    <Box sx={{ flexGrow: 1, boxShadow: 10, width: '50%', backgroundColor: 'white' }}>

        <Grid container spacing={6}>
        <Grid item lg={5}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
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
                                primary="Employers"
                                secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>,
                    )}
                </List>
        </Grid>
        </Grid>
</Box>
    )
}
function generate(arg0: JSX.Element) {
    throw new Error('Function not implemented.');
}

