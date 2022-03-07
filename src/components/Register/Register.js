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
import './Register.css';
import { connect } from 'react-redux';
import { setemployee } from '../../redux/actions/user'
import API from '../../config/env/local'
import image from './2.jpg';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles({});
  const [password, setpassward] = useState(" ")
  const [email, setemail] = useState()
  const [address, setAddress] = useState(" ")
  const [phone, setPhone] = useState(" ")
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [emailMessage, setemailMessage] = useState()
  const [PasswordMessage, setPasswordMessage] = useState()
  const [PhoneMessage, setPhoneMessage] = useState()
  const [alert,setalert]=useState(false)
  const navigate=useNavigate()


  const signup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "employeeFirstName": firstName,
      "employeeLastName": lastName,
      "employeeAddress": address,
      "employeePhone": phone,
      "employeeEmail": email,
      "employeePassword": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${API.LOGIN_URL}employee/Post`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        debugger;
        if (result.Data == null)
        setalert(true)   
         else{ 
          navigate('/Schedule')
          navigate('/Register')}
   
      })
      .catch(error => setalert(true));
  }
  const Validate = () => {
    let flage = true
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      flage = false
      setemailMessage("מייל לא חוקי")
    }
    if (password.length < 6) {
      setPasswordMessage("סיסמא לא חוקית")
      flage = false
    }
    if (phone.length < 10) {
      setPhoneMessage("מספר טלפון לא חוקי")
      flage = false
    }
    if (flage == true)
      signup()
  }

  return (
    <>
     {alert===true&&<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" dir="rtl">הכתובת מייל קיימת במערכת</Alert>
    </Stack>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <img style={{height:'100px',width:'100px'}} src={image} />
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="שם משפחה"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="שם פרטי"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="adress"
                  label="כתובת"
                  name="adress"
                  autoComplete="adress"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="טלפון"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p style={{ color: "red" }}>{PhoneMessage}</p>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="כתובת מייל"
                  name="email"
                  autoComplete="email"

                  onChange={(e) => setemail(e.target.value)}
                />
              </Grid>
              <p style={{ color: "red" }}>{emailMessage}</p>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="סיסמא"
                  type="password"
                  id="password"
                 
                  onChange={(e) => setpassward(e.target.value)}
                />
              </Grid>
              <p style={{ color: "red" }}>{PasswordMessage}</p>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => Validate()}
            >
           אישור
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    employee: state.user
  };
}
export default connect(mapStateToProps)(SignUp)