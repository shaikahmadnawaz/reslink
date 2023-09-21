import Sidebar from "./components/Sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeDark = createTheme({
  palette: {
    background: {
      default: "#1F2129",
    },
    text: {
      primary: "#FEFEFE",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#10182800",
          color: "#FEFEFE",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
