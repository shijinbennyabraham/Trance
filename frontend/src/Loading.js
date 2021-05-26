import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:650px)');

  return (
    <div className={classes.root}>
      <LinearProgress style={{width:matches?'250px':'500px',marginTop:'1em'}}/>
    </div>
  );
}