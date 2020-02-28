import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  blocker: {
    '&::before': {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      content: '""',
      backgroundColor: 'red',
      opacity: 0.1,
    },
  },
}));

export default function Rendering() {
  const { blocker } = useStyles();
  console.log('blocker');
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={blocker}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
      }}
      spacing={1}
    />
  );
}
