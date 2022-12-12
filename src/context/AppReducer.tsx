import * as jose from 'jose'
// import jwtDecode from "jwt-decode";
export default function appReducer(state: any, action: { type: any; payload: any; }) {
  switch (action.type) {
    case 'EDIT_EMPLOYER':
      const updateEmp = action.payload;
      return {
        ...state,
        employer: updateEmp,
      };
    case 'GET_ONE_EMP':
      const getEmp = action.payload;
      const getOneEmp = state.notes.filter((emp: { id: any; }) => {
        if (emp.id === getEmp.id) {
          return getEmp;
        }
        return emp;
      });
      return {
        ...state,
        emps: getOneEmp,
      };
    case 'LOGIN_USER':
      // const [Authentication, setAuthentication] = useState<any>(null)
      const GenerateJwtToken = async (state: any) => {
        const secretKey = new TextEncoder().encode(
          'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        const alg = 'HS256'
        const jwtToken = await new jose.SignJWT({'urn:state:claim': true })
          .setProtectedHeader({ alg })
          .setIssuedAt(state)
          .setIssuer('urn:state:issuer')
          .setAudience('urn:state:audience')
          .setExpirationTime('1m')
          .sign(secretKey)
        localStorage.setItem('access-token', JSON.stringify(jwtToken))
        
        // const decodedJwt: any = jwtDecode(jwtToken);
        // console.log(decodedJwt)
      }
      // localStorage.getItem(action.payload.token);  
      return {
        ...state,
        employer: GenerateJwtToken(action.payload),
        // setAuthentication: true,
        // error: null,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        employer: null,
        setAuthentication: false,
        error: action.payload,
      };
    default:
      return state;
  }
}