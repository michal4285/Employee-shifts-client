import React, { useEffect, useState } from 'react';
import './Details.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Details() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" >
            {/* <TextField id="standard-basic" label="Standard" /> */}
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            <TextField id="outlined-basic" label="שם פרטי" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="שם משפחה" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="עיר" variant="outlined" />
        </form>
    );
}
