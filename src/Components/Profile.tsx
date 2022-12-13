import { CenterFocusStrong } from '@mui/icons-material';
import { Avatar, Box, Grid } from '@mui/material'
import { borderRadius } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Profile() {

    const { employer } = useContext(GlobalContext);

    const [LoggedInUser, setLoggedInUser] = useState([]);

    useEffect(() => {
        getLoginUserInfo(employer);
    }, [])

    const getLoginUserInfo = async (employer: { id: any }) => {

        let res = await fetch(`http://localhost:5000/emplist/${employer}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let user = await res.json();
        setLoggedInUser(user)

        // .then((response) => response.json())
        // .then((data) => {
        //     // addAllEmp(data);
        //     setLoggedInUser(LoggedInUser)
        // })
        // .catch((error) => {
        //     console.log(error);
        // });



        // let res = await fetch('http://localhost:5000/emplist?email=' + employer.id, {
        //     method: 'Get'
        // })
        // setLoggedInUser(LoggedInUser)
        // let user = await res.json();
        // console.log(user)
    }

    return (
        <Grid container spacing={3} sx={{ mt: '5%', justifyContent: 'center', alignContent: 'center' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                height: '100%',
                alignItems: 'center',
                width: '50%',
                padding: '3%',
                justifyContent: 'center',
                boxShadow: 12,
                borderRadius: '15px'
            }}>
                <Avatar sx={{ height: "60px", width: "60px" }} />
                <p>Full name</p>
                <p>Email</p>
                <p>Hobbies</p>
                {/* {LoggedInUser.map((user: any) => (
                    <>
                        <p>Full Name:{user.name}</p>
                        <label htmlFor="">Gender</label>
                        <label htmlFor="">Email</label>
                        <label htmlFor="">hobbies</label>
                    </>
                ))} */}
            </Box>
        </Grid>
    )
}
