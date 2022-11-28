
export default function appReducer(state: any, action: { type: any; payload: any; }) {
    switch (action.type) {
        case "EDIT_EMPLOYER":
            return {
                ...state,
                notes: [...action.payload],
            };
        default:
            return state;
    }
}