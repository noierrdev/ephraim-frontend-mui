import { CssBaseline } from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'
function App() {
  const theme=createTheme({
    palette:{
      mode:"dark"
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
