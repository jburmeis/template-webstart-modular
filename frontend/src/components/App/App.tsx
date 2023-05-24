import React, { FC } from 'react';
import { Box, SxProps } from '@mui/material';
import AppThemeProvider from './AppThemeProvider';
import Header from './Header';
import Router from './Router';

// Style definitions
const mainContentStyle: SxProps = {
  marginTop: 6,
  paddingLeft: 1,
  paddingRight: 1,
  height: "calc(100vh - 50px)",
  overflowX: "hidden",
  overflowY: "overlay"
}


const App: FC = () => (
  <AppThemeProvider>
    <Header />
    <Box sx={mainContentStyle}>
      <main>
        <Router />
      </main>
    </Box>
  </AppThemeProvider>
);

export default App;
