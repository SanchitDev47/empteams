import { Box } from "@mui/system";
import NavHeader from "./Compoenets/NavHeader";
import Entry from "./Compoenets/Entry";
import LoggedInVeiw from "./Compoenets/LoggedInVeiw";
import EmpForm from "./Compoenets/EmpForm";
import "./App.css";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavHeader />
      <Entry />
      {/* <LoggedInVeiw /> */}
      {/* <EmpForm /> */}
    </Box>
  );
}

export default App;
