import React, { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import LinkButton from 'components/Common/LinkButton';
import { AppRoutes } from 'config/AppRoutes';


const Page2: FC = () => (
  <>
    <Typography variant="h3">Page 2</Typography>
    <Divider />

    <Box sx={{ marginTop: 1, textAlign: "center" }}>
      <LinkButton color="primary" startIcon={<ArrowBack />} to={AppRoutes.Root}> Back to root page </LinkButton>
    </Box>
  </>
);

export default Page2;
