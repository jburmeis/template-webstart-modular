import React, { FC, useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from './AppThemeProvider';


const ThemeSelectButton: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Tooltip title={(theme === 'light') ? 'Go dark' : 'Go light'}>
      <IconButton
        color="inherit"
        edge="end"
        onClick={toggleTheme}
      >
        {theme === "light" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip >
  )

}

export default ThemeSelectButton;
