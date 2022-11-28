import { Notes } from "@mui/icons-material";
import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";


const initialState: any = {
    employer: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    function editEmployer(emp: any) {
        dispatch({
            type: "UPDATE_EMPLOYER",
            payload: emp,
        })
    }

    return (
        <GlobalContext.Provider value={{employer: state.employer, editEmployer,}}>
            {children}
        </GlobalContext.Provider>
    )
}



