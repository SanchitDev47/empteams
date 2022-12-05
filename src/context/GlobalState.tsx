import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState: any = {
    employer: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function editEmp(id: any) {
        dispatch({
            type: "EDIT_EMPLOYER",
            payload: id,
        })
    }

    function addEmp(emp: any) {
        dispatch({
            type: "UPDATE_EMPLOYER",
            payload: emp,
        })
    }

    function getUserToken(user: any) {
        dispatch({
            type: 'LOGIN_USER',
            payload: user,
        })
    }
    
    function userTokenFail(user: any) {
        dispatch({
            type: 'LOGIN_FAIL',
            payload: user,
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                employer: state.employer,
                editEmp,
                addEmp,
                getUserToken,
                userTokenFail,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}



