import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const initialState: any = {
    employer: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

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

    return (
        <GlobalContext.Provider 
        value={{
            employer: state.employer, 
            editEmp,
            addEmp,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


