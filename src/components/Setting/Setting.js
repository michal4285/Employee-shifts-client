import React, { useEffect, useState } from 'react';
import './Setting.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../config/env/local';
import { connect } from 'react-redux';
import { setSetting } from '../../redux/actions/settingShifts';
import image from './2.jpg';
import { useTheme } from '@mui/material/styles';
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
    settingShifts: state.settingShifts
  };
}


function Setting(props) {
  const { settingShifts } = props
  debugger;
  const classes = useStyles()
  const [freedaysforeployee, setfreedaysforeployee] = useState()
  const [shiftsforemployee, setshiftsforemployee] = useState()
  const [missingemployeesinday, setmissingemployeesinday] = useState()
  const [missingemployeesinShift, setmissingemployeesinShift] = useState()
  const [employeesnum, setemployeesnum] = useState()
  const [changeshifts, setchangeshifts] = useState()
  const [employeeNumInShift,setemployeeNumInShift]=useState()
  const [alert,setalert]=useState(false)
  const[settings,setSettings]=useState([,])

  useEffect(() => {
    fetch(`${API.LOGIN_URL}settings/GetAll`, {
      method: 'GET',
      // body: JSON.stringify({})
    }).then(res => res.json()).then(result => {
         debugger;
         if (result.Data != null) 
        //  {props.dispatch(setnumfreedaysforeployee(result.Data[0].settingValueInt))
        //  props.dispatch(setnumshiftsforemployee(result.Data[1].settingValueInt))
        //  props.dispatch(setnummissingemployeesinday(result.Data[2].settingValueInt))
        //  props.dispatch(setnummissingemployeesinShift(result.Data[3].settingValueInt))
        //  props.dispatch(setnumemployees(result.Data[4].settingValueInt))
        //  props.dispatch(setdayofchangeshifts(result.Data[5].settingValueInt))
         setSettings(result.Data)
        // }
      }
      ).catch(err => console.log(err.message))
  }, [])

  const update = () => {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = settings
    raw[0].settingValueInt=freedaysforeployee
    raw[1].settingValueInt=shiftsforemployee
    raw[2].settingValueInt=missingemployeesinday
    raw[3].settingValueInt=missingemployeesinShift
    raw[4].settingValueInt=employeesnum
    raw[5].settingValueInt=changeshifts

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${API.LOGIN_URL}Settings/Update`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        debugger;
        if (result.Data == null)
          setalert(true)
        // else {
        //   props.dispatch(setnumfreedaysforeployee(result[0].settingValueInt))
        //   props.dispatch(setnumshiftsforemployee(result[1].settingValueInt))
        //   props.dispatch(setnummissingemployeesinday(result[2].settingValueInt))
        //   props.dispatch(setnummissingemployeesinShift(result[3].settingValueInt))
        //   props.dispatch(setnumemployees(result[4].settingValueInt))
        //   props.dispatch(setdayofchangeshifts(result[5].settingValueInt))
        // }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="main mt-5">
       {alert===true&&<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" dir="rtl">עדכון ניכשל</Alert>
    </Stack>}
      <form className={classes.root} noValidate autoComplete="off" >
        {/* <TextField id="standard-basic" label="Standard" /> */}        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        <img style={{ height: '90px', width: '90px', marginRight: '5%' }} src={image} />
        <div className="ml-20" style={{ marginLeft: "38%", color: "blue", fontSize: "150%", fontFamily: "Cursive" }}>
          עריכת הגדרות
        </div>
        <TextField size="small" dir="rtl" onChange={(e) => setfreedaysforeployee(e.target.value)} id="outlined-basic" label="מספר ימי חופש לעובד" variant="outlined" className='textField ml-5' defaultValue='1'/>
        <br />
        <TextField size="small" dir="rtl" onChange={(e) => setshiftsforemployee(e.target.value)} id="outlined-basic" label="מספר משמרות לעובד" variant="outlined" className='textField ml-5' defaultValue='1'/>
        <br />
        <TextField size="small" dir="rtl" onChange={(e) => setmissingemployeesinday(e.target.value)} id="outlined-basic" label="מספר עובדים חסרים ביום" variant="outlined" className='textField ml-5' defaultValue='5'/>
        <br />
        <TextField size="small" dir="rtl" onChange={(e) => setmissingemployeesinShift(e.target.value)} id="outlined-basic" label="מספר עובדים חסרים במשמרת" variant="outlined" className='textField ml-5' defaultValue='15'/>
        <br />
        <TextField size="small" dir="rtl" onChange={(e) => setemployeesnum(e.target.value)} id="outlined-basic" label="מספר עובדים במוסד" variant="outlined" className='textField ml-5' defaultValue='20' />
        <br />
        <TextField size="small" dir="rtl" onChange={(e) => setemployeeNumInShift(e.target.value)} id="outlined-basic" label="מספר עובדים במשמרת" variant="outlined" className='textField ml-5' defaultValue='5' />
        <br />
        <TextField size="small" dir="rtl" onChange={(e) => setchangeshifts(e.target.value)} id="outlined-basic" label="יום בחודש לשינוי משמרות" variant="outlined" className='textField ml-5' defaultValue='5' />
        <br />
        <Button size="small" className='ml-2' variant="contained" color="primary" onClick={() => update()}>
          אישור
        </Button>
      </form>
    </div>
  );
}
export default connect(mapStateToProps)(Setting)
