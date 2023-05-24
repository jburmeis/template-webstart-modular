import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';


const NotFoundPage: FC = () => {
  // Get the current location from react-router
  const location = useLocation();

  return (
    <>
      <Typography variant="h4" align="center">
        <strong>Error 404</strong>
      </Typography>
      <Typography align="center">
        Location not found: {location.pathname}
      </Typography>
    </>
  )
}

export default NotFoundPage;
