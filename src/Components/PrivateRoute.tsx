import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom'
// import { useSelector } from "react-redux";
import * as jose from 'jose'
import jwtDecode from "jwt-decode";
import { GlobalContext } from '../context/GlobalState';

const PrivateRoute = ({ Component, ...rest }: any) => {
    // const auth = useSelector((state: { auth: any; }) => state.auth)
    const { employer, getUserToken } = useContext(GlobalContext);

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<any>(null);

    const GenerateJwtToken = async (employer: any) => {
        const secretKey = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        const alg = 'HS256'
        const jwtToken = await new jose.SignJWT({ 'urn:employer:claim': true })
            .setProtectedHeader({ alg })
            .setIssuedAt(employer)
            .setIssuer('urn:employer:issuer')
            .setAudience('urn:employer:audience')
            .setExpirationTime('1m')
            .sign(secretKey)
        localStorage.setItem('access-token', JSON.stringify(jwtToken))
        const decodedJwt: any = jwtDecode(jwtToken);
    }

    const JwtTokenExp = (decodedJwt: any) => {
        let currentDate = new Date();
        if (decodedJwt.exp * 2000 < currentDate.getTime()) {
            localStorage.clear();
            console.log("Token expired.");
            navigate('/')
        } else {
            console.log("Valid token");
        }
        console.log(decodedJwt.exp);
    }

    //UseEffect for token authentication
    useEffect(() => {
        debugger;
        FetchUserToken(employer);
        // getUserToken(employer);

        // eslint-disable-next-line
    }, [])

    async function FetchUserToken(employer: any) {
        debugger
        const secret = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        const alg = 'HS256'
        const jwtToken = await new jose.SignJWT({ 'urn:employer:claim': true })
            .setProtectedHeader({ alg })
            .setIssuedAt(employer)
            .setIssuer('urn:employer:issuer')
            .setAudience('urn:employer:audience')
            .setExpirationTime('1m')
            .sign(secret)
        localStorage.setItem('access-token', JSON.stringify(jwtToken))
        const decodedJwt: any = jwtDecode(jwtToken);
        console.log(decodedJwt)

        if (isAuthenticated === null) {
            return <>session is expired</>
        }
        let token = localStorage.getItem('access-token')
        if (token) {
            let tokenExpiration: any = jwtDecode<any>('token').exp;
            let dateNow = new Date();
            if (tokenExpiration < dateNow.getTime() / 1000) {
                setIsAuthenticated(false)
            } else {
                setIsAuthenticated(true)
            }
        } else {
            setIsAuthenticated(false)
        }
    }
    return (
        <Route {...rest} render={(props: JSX.IntrinsicAttributes) =>
            !isAuthenticated ? (
                <Navigate replace to="/" />
            ) : (
                <Component {...props} />
            )
        }
        />
    );
};

export default PrivateRoute;