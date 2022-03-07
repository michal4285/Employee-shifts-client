import React, { useEffect, useState } from 'react';
import './Details.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../config/env/local';
import { connect } from 'react-redux';
import { setemployee } from '../../redux/actions/user';
import image from './2.jpg';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function mapStateToProps(state) {
    return {
        employee: state.user,

    };
}


function Details(props) {
    const { employee } = props
    debugger;
    const classes = useStyles()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [tel, setTel] = useState()
    const [email, setEmail] = useState()
    const [originalPassword, setOriginalPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [newpasswordMessage, setnewpasswordMessage] = useState()
    const [originalPasswordMessage, setoriginalPasswordMessage] = useState()
    const [emailMessage, setemailMessage] = useState()
    const [telMessage, settelMessage] = useState()
    const [alert,setalert]=useState(false)
    useEffect(() => {
        // alert(firstName)
    }, [])

    const update = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "employeeFirstName": firstName,
            "employeeLastName": lastName,
            "employeeAddress": address,
            "employeePhone": tel,
            "employeeEmail": email,
            "employeePassword": newPassword,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${API.LOGIN_URL}Employee/Update`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                debugger;
                if (result.Data == null)
                    setalert(true)
                else props.dispatch(setemployee(result))
            })
            .catch(error =>setalert(true));
    }
    const Validate = () => {
        let flage = true
 
        // if (email === "in correct") {
        //     setemailMessage("אימייל לא קיים במערכת")
        // }
        if (newPassword != confirmPassword) {
            setnewpasswordMessage("אימות נכשל")
        }
        if (newPassword?.length < 6) {
            setnewpasswordMessage("סיסמה לא חוקית")
            flage = false
        }
        if (tel?.length < 10) {
            settelMessage("מספר טלפון לא חוקי")
            flage = false
        }
        if (originalPassword === "in correct") {
            setoriginalPasswordMessage("אימות ניכשל")
        }
        if (flage == true)
            update()
    }



    return (
            <div className="main mt-5">
                 {alert==true&&<Stack sx={{ width: '100%' }} spacing={2}>
                     <Alert severity="error" dir="rtl">עדכון נכשל</Alert>
                  </Stack>}
                <form className={classes.root} noValidate autoComplete="off" >
                    {/* <TextField id="standard-basic" label="Standard" /> */}
                    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                    <img style={{ height: '150px', width: '150px' }} src={image} />
                    <div className="ml-20" style={{ marginLeft: "33%", color: "blue", fontSize: "200%", fontFamily: "Cursive" }}>
                    עריכת פרטים אישיים
                    </div>
                    <TextField onChange={(e) => setLastName(e.target.value)} defaultValue={employee.lastName} id="outlined-basic" label="שם משפחה" variant="outlined" className='textField ml-5' />
                    
                    <TextField
                        onChange={(e) => setFirstName(e.target.value)} defaultValue={employee.firstname} id="outlined-basic" label="שם פרטי" variant="outlined" className='textField ml-5' />
                   <br />
                    <TextField onChange={(e) => setAddress(e.target.value)} defaultValue={employee.address} id="outlined-basic" label="כתובת" variant="outlined" className='textField ml-5' />
                   
                    <TextField onChange={(e) => setTel(e.target.value)} defaultValue={employee.phone} id="outlined-basic" label="טלפון" variant="outlined" className='textField ml-5' />
                    <p style={{ color: "red" }}>{telMessage}</p>
                    <TextField   id="outlined-basic" defaultValue={employee.email} disabled label="אימייל" variant="outlined" className='textField ml-5' />
                    <p style={{ color: "red", marginLeft: "44%" }}>{emailMessage}</p>
                    <TextField onChange={(e) => { if (e.target.value === employee.password) setOriginalPassword(e.target.value); else setOriginalPassword("in correct"); }} id="outlined-basic" label="סיסמתך המקורית" variant="outlined" className='textField ml-5' />
                    <p style={{ color: "red", marginLeft: "44%" }}>{originalPasswordMessage}</p>
                    <TextField onChange={(e) => setNewPassword(e.target.value)} id="outlined-basic"  label="סיסמא חדשה" variant="outlined" className=' ml-5' />
                     
                    <TextField onChange={(e) => setConfirmPassword(e.target.value)} id="outlined-basic"  label="אימות סיסמא" variant="outlined" className=' ml-5' />
                      <p style={{ color: "red", marginLeft: "44%"  }}>{newpasswordMessage}</p>
                    <br />
                    <Button className='ml-5' variant="contained" color="primary" onClick={() => Validate()}>
                        אישור
                    </Button>
                </form>
            </div>     
    );
}
export default connect(mapStateToProps)(Details)
