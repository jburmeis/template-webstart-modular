import { createTheme, ThemeOptions } from "@mui/material";

// Utility function to create a custom MUI theme
function createMyTheme(options: ThemeOptions) {
  return createTheme({
    ...options,
  });
}

// Extend MuiTheme with custom properties
// Example code for a custom color integration into the material theme
declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      menuBackground: string;
    };
  }

  // Allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customColors?: {
      menuBackground?: string;
    };
  }
}

/*********************************************************************
 *                          The dark theme
 ********************************************************************/

export const darkTheme = createMyTheme({
  // Define primary and secondary color
  palette: {
    mode: "dark",
    primary: {
      main: "#4869bf",
    },
    secondary: {
      main: "#0c8",
    },
  },

  // Example code for a custom color integration into the material theme
  customColors: {
    menuBackground: "rgb(45,45,45)",
  },

  // Example code for a global style override of a material ui components
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          "::-webkit-scrollbar": {
            width: "0.5em",
            height: "0.5em",
          },
          "::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0)",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(120,120,120,0.4)",
            borderRadius: "10px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#7daee1",
        },
      },
    },
    /////// Enable this section for 'Material You' like rounded-corner controls ///////
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: "24px",
        },
        sizeMedium: {
          borderRadius: "24px",
        },
        sizeLarge: {
          borderRadius: "24px",
        },
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: "32px",
          },
        },
        sizeSmall: {
          "& fieldset": {
            borderRadius: "24px",
          },
        },
      },
    },
    /////// End ///////
  },
});

/*********************************************************************
 *                          The light theme
 ********************************************************************/

export const lightTheme = createMyTheme({
  // Define primary and secondary color
  palette: {
    mode: "light",
    primary: {
      main: "#244567",
    },
    secondary: {
      main: "#d2525e",
    },
  },

  // Example code for a custom color integration into the material theme
  customColors: {
    menuBackground: "rgb(240,240,240)",
  },

  // Example code for a global style override of a material ui components
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#356cb1",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          "::-webkit-scrollbar": {
            width: "0.5em",
            height: "0.5em",
          },
          "::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0)",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "10px",
          },
        },
      },
    },
    /////// Enable this section for 'Material You' like rounded-corner controls ///////
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: "24px",
        },
        sizeMedium: {
          borderRadius: "24px",
        },
        sizeLarge: {
          borderRadius: "24px",
        },
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: "32px",
          },
        },
        sizeSmall: {
          "& fieldset": {
            borderRadius: "24px",
          },
        },
      },
    },
    /////// End ///////
  },
});
