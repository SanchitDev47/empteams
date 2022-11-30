export default function appReducer(state: any, action: { type: any; payload: any; }) {
  switch (action.type) {
    case 'EDIT_EMPLOYER':
      const updateEmp = action.payload;
      return {
        ...state,
        employer: updateEmp,
      };
      case 'ADD_ALL_EMPS':
        return {
          ...state,
          notes: [...action.payload],
        };
    default:
      return state;
  }
}