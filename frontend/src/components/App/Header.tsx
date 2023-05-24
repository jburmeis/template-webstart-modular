import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Theme,
  SxProps
} from '@mui/material';
import { AppRoutes } from 'config/AppRoutes';
import ThemeConfigComponent from './ThemeSelectButton';

const TabStyle: SxProps<Theme> = {
  textTransform: "none",
  "&.Mui-selected": {
    background: (theme: Theme) => theme.palette.mode === 'light' 
      ? `linear-gradient(0deg, rgba(210,82,94,0.3) 0%, rgba(36,69,103,0) 30%)`
      : `linear-gradient(0deg, rgba(0, 204, 136,0.3) 0%, rgba(36,39,39,0) 30%)`,
  },
}


const Header: FC = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="primary" sx={{zIndex: (theme: Theme) => theme.zIndex.drawer + 1}}>
      <Toolbar variant="dense">
        <Tabs
          centered
          value={location.pathname}
          indicatorColor="secondary"
          textColor="inherit">
          <Tab sx={TabStyle} component={Link} label="Home" to={AppRoutes.Root} value={AppRoutes.Root} />
          <Tab sx={TabStyle} component={Link} label="Page 2" to={AppRoutes.Page2} value={AppRoutes.Page2} />
        </Tabs>
        <Box sx={{flexGrow: 1}} />
        <ThemeConfigComponent />
      </Toolbar>
    </AppBar>
  );

}

export default Header;
