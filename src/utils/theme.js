import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({

  breakpoints: {
      values: {
        sm: 320,
        md: 768,
        lg: 960,
      }
  }
  
});



export default theme;
