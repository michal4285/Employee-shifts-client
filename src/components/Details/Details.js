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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
     
    const classes = useStyles()
    const [firstName, setFirstName] = useState(employee.firstname)
    const [lastName, setLastName] = useState(employee.lastName)
    const [address, setAddress] = useState(employee.address)
    const [tel, setTel] = useState(employee.phone)
    const [email, setEmail] = useState(employee.email)
    const [originalPassword, setOriginalPassword] = useState()
    const [newPassword, setNewPassword] = useState(employee.password)
    const [confirmPassword, setConfirmPassword] = useState(employee.password)
    const [newpasswordMessage, setnewpasswordMessage] = useState()
    const [originalPasswordMessage, setoriginalPasswordMessage] = useState()
    const [emailMessage, setemailMessage] = useState()
    const [telMessage, settelMessage] = useState()
    const [alert,setalert]=useState(false)
    const [alertSuccess,setalertSuccess]=useState(false)
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
                
                if (result.Data == null)
                    setalert(true)
                else props.dispatch(setemployee(result.Data))  
            })
            .catch(error =>setalert(true));
    }
    const Validate = () => {
        setalertSuccess(false)
        setoriginalPasswordMessage('')
        setnewpasswordMessage('')
        setnewpasswordMessage('')
        let flage = true
        
        if (newPassword != confirmPassword) {
            setnewpasswordMessage("אימות נכשל")
            flage=false
        }
        if (newPassword?.length < 6  ) {
            setnewpasswordMessage("סיסמא לא חוקית")
            flage = false
        }
        if (originalPassword === "in correct" ||originalPassword !==employee.password) {
               
            setoriginalPasswordMessage("אימות נכשל")
            flage=false
        }
         if (flage == true && newPassword !=null )
         {
         update()
         setalertSuccess(true) 
        }
      
    }



    return (
            <div className="main mt-5" >
                 {alert==true&&<Stack sx={{ width: '100%' }} spacing={2}>
                     <Alert severity="error" dir="rtl">עדכון נכשל</Alert>
                  </Stack>}
                  {alertSuccess==true&&<Stack sx={{ width: '100%',margin: '5px'}} spacing={2}>
                 <Alert severity="success" dir="rtl">הפרטים עודכנו בהצלחה</Alert></Stack>}
                <form className={classes.root} noValidate autoComplete="off" >
                    {/* <TextField id="standard-basic" label="Standard" /> */}
                    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                    <img style={{ height: '60px', width: '60px',marginTop:'-5px'}} src={image} />
                    <div className="ml-20" style={{ marginLeft: "36%", color: "blue", fontSize: "150%", fontFamily: "Cursive" }}>
                    עריכת פרטים אישיים
                    </div>
                    <TextField onChange={(e) => setLastName(e.target.value)} defaultValue={employee.lastName} id="outlined-basic" label="שם משפחה" variant="outlined" className='textField ml-5'size="small" />
                    
                    <TextField
                    size="small" onChange={(e) => setFirstName(e.target.value)} defaultValue={employee.firstname} id="outlined-basic" label="שם פרטי" variant="outlined" className='textField ml-5' />
                   <br />
                    <TextField size="small" onChange={(e) => setAddress(e.target.value)} defaultValue={employee.address} id="outlined-basic" label="כתובת" variant="outlined" className='textField ml-5' />
                   
                    <TextField size="small" onChange={(e) => setTel(e.target.value)} defaultValue={employee.phone} id="outlined-basic" label="טלפון" variant="outlined" className='textField ml-5' />
                    <p style={{ color: "red" }}>{telMessage}</p>
                    <TextField  size="small" id="outlined-basic" defaultValue={employee.email} disabled label="אימייל" variant="outlined" className='textField ml-5' />
                    <p style={{ color: "red", marginLeft: "42%" }}>{emailMessage}</p>
                    <TextField size="small" onChange={(e) => { if (e.target.value === employee.password) setOriginalPassword(e.target.value); else setOriginalPassword("in correct")}} id="outlined-basic" label="סיסמא" variant="outlined" className='textField ml-5' type="password" />
                    <p style={{ color: "red", marginLeft: "42%" }}>{originalPasswordMessage}</p>
                      <TextField size="small" onChange={(e) => setConfirmPassword(e.target.value)} id="outlined-basic"  label="אימות סיסמא" variant="outlined" className=' ml-5' type="password" />
                 
                    <TextField size="small" onChange={(e) => setNewPassword(e.target.value)} id="outlined-basic"  label="סיסמא חדשה" variant="outlined" className=' ml-5' type="password" />
                     
                     <p style={{ color: "red", marginLeft: "42%"  }}>{newpasswordMessage}</p>
                    <br />
                    <Button size="small" style={{marginTop:"0px"}} className='ml-5' variant="contained" color="primary" onClick={() => Validate()}>
                        אישור
                    </Button>
                </form>
            </div>     
    );
}
export default connect(mapStateToProps)(Details)
