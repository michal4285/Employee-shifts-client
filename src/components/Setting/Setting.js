import React, { useEffect, useState } from 'react';
import './Setting.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../config/env/local';
import { connect } from 'react-redux';
import { setSetting } from '../../redux/actions/settingShifts';
import image from './2.jpg';


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
         else alert("אין עובדים במערכת")
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
          alert("עדכון ניכשל")
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
      <form className={classes.root} noValidate autoComplete="off" >
        {/* <TextField id="standard-basic" label="Standard" /> */}        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        <img style={{ height: '100px', width: '100px', marginRight: '90%' }} src={image} />
        <div className="ml-20" style={{ marginLeft: "40%", color: "blue", fontSize: "200%", fontFamily: "Cursive" }}>
          עריכת הגדרות
        </div>
        <TextField dir="rtl" onChange={(e) => setshiftsforemployee(e.target.value)} id="outlined-basic" label="מספר ימי חופש לעובד" variant="outlined" className='textField ml-5' />
        <br />
        <TextField dir="rtl" onChange={(e) => setmissingemployeesinday(e.target.value)} id="outlined-basic" label="מספר משמרות לעובד" variant="outlined" className='textField ml-5' />
        <br />
        <TextField dir="rtl" onChange={(e) => setmissingemployeesinShift(e.target.value)} id="outlined-basic" label="מספר עובדים חסרים במשמרת" variant="outlined" className='textField ml-5' />
        <br />
        <TextField dir="rtl" onChange={(e) => setemployeesnum(e.target.value)} id="outlined-basic" label="מספר עובדים במוסד" variant="outlined" className='textField ml-5' />
        <br />
        <TextField dir="rtl" onChange={(e) => setchangeshifts(e.target.value)} id="outlined-basic" label="יום בחודש לשינוי משמרות" variant="outlined" className='textField ml-5' />
        <br />
        <Button className='ml-2' variant="contained" color="primary" onClick={() => update()}>
          אישור
        </Button>
      </form>
    </div>
  );
}
export default connect(mapStateToProps)(Setting)
