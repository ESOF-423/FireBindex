import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#889bc3' }, 
    secondary: { main: '#93C178' }, 
  },
  typography: { useNextVariants: true },
  
});

export default theme