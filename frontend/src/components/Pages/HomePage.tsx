import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'index';
import { addElement, addMultipleElements } from 'store/slices/application';
import { addRandomElements, globalActions } from 'store/globalActions';
import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  Divider, 
  Grid, 
  Stack, 
  SxProps, 
  Theme, 
  Typography, 
  useTheme 
} from '@mui/material';


const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.application.elements);

  return (
    <>
      <Typography variant="h3">Home Page</Typography>
      <Divider />

      <Stack direction="row" gap={1} marginTop={1}>
        <Button size="small" variant="outlined" onClick={() => dispatch(addElement())}>
          Add Element
        </Button>
        <Button size="small" variant="outlined" onClick={() => dispatch(addMultipleElements(2))}>
          Add Elements (2)
        </Button>
        <Button size="small" variant="outlined" onClick={() => dispatch(addRandomElements())}>
          Add Elements (random)
        </Button>
        <Button size="small" variant="contained" color="secondary" onClick={() => dispatch(globalActions.applicationReset({ numElements: 3 }))}>
          Reset Elements
        </Button>
      </Stack>

      <Grid container spacing={2} marginTop={1} paddingLeft={0.5}>
        {elements.map(element => <GridCard key={element} element={element} />)}
      </Grid>
    </>
  );
}


// Note: This GridCard component should be in its own file. 
// It is here so it can be removed easily, as it is only a demo.
const CardActionStyles: SxProps<Theme> = {
  justifyContent: "space-between",
  borderTop: 1,
  borderTopColor: "divider",
  background: (theme: Theme) => theme.customColors.menuBackground,
}

const GridCard: FC<{ element: string }> = (props) => {
  const theme = useTheme();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{
        boxShadow: checked ? `0px 0px 6px 2px ${theme.palette.primary.main}` : undefined
      }}>
        <CardHeader title="Card Title" subheader="Explanatory subtitle" />
        <CardContent>
        </CardContent>
        <CardActions disableSpacing sx={CardActionStyles}>
          <Button size="small" variant="contained" onClick={() => setChecked(state => !state)}>
            Click
          </Button>
          <Typography color="textSecondary">{`ID: ${props.element}`}</Typography>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default HomePage;
