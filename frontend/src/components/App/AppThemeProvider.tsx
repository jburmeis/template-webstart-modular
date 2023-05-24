import React, { createContext, FC, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

// Load roboto font for entire application
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Get theme definitions
import { darkTheme, lightTheme } from 'config/Themes';

// Define a React Context for the current theme (light / dark) 
export type ThemeType = "light" | "dark";
type ThemeContextContent = {
  theme: ThemeType,
  toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeContextContent>({
  theme: "light",
  toggleTheme: () => null
});


interface ComponentProps {
  children?: React.ReactNode
};

const AppThemeProvider: FC<ComponentProps> = (props) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}


export default AppThemeProvider;
