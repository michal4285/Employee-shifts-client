import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { setemployee, setemployeefirstname, setemployeelastname, setemployeepassword, setemployeeemail } from '../../redux/actions/user'
import {setexit} from '../../redux/actions/settings'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import API from '../../config/env/local'
import image from './2.jpg';
import image1 from './1.jpg';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [password, setpassward] = useState()
  const [email, setemail] = useState()
  const navigate=useNavigate()
  const [alert,setalert]=useState(false)

  const Signin = () => {
    setalert(false)
    fetch(`${API.LOGIN_URL}Constraint/orderSchedule`, {
      method: 'GET',
    }).then(res => res.json()).then(data => {
      }).catch(err => setalert(true))

    fetch(`${API.LOGIN_URL}employee/Login?email=${email}&password=${password}`, {
      method: 'GET',
    })
      .then(res => res.json()).then(data => {
        
        console.log(data)
        if (data.Data != null) {
          let employee = data.Data
          props.dispatch(setemployee(employee))
          props.dispatch(setexit(false))
          navigate('/Schedule')
        }
        else setalert(true)
      }
      ).catch(err => setalert(true))
  }

  return (
    <Container component="main" maxWidth="xs">
       {alert===true&&<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" dir="rtl">?????????? ???? ???????? ???? ????????????</Alert>
    </Stack>}
      <CssBaseline />
      <div className={classes.paper}>         
        <img style={{height:'100px',width:'100px'}} src={image} />
        {/* <Typography style={{color:'blue'}} component="h1" variant="h5">
          Sign in
        </Typography> */}
        <form className={classes.form} noValidate>
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="?????????? ????????"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setemail(e.target.value)}
          /> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="??????????"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setpassward(e.target.value)}
            align='right'
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => Signin()}
          >
            ??????????????
          </Button>   
        </form>
        <img style={{height:'150px',width:'400%'}} src={image1} />
      </div>

    </Container>
  );
}
function mapStateToProps(state) {
  return {
    employee: state.user
  };
}
export default connect(mapStateToProps)(SignIn)