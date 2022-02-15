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
  const [institutionId, setInstitutionId] = useState()
  const [settingName, setSettingName] = useState()
  const [settingValueInt, setSettingValueInt] = useState()
  const [settingValueString, setSettingValueString] = useState()
  const [settingValueDate, setSettingValueDate] = useState()
  useEffect(() => {
    // alert(firstName)
  }, [])

  const update = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "institutionId": institutionId,
      "settingName": settingName,
      "settingValueInt": settingValueInt,
      "settingValueString": settingValueString,
      "settingValueDate": settingValueDate,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${API.LOGIN_URL}Settings/Update`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        debugger;
        if (result.Data == null)
          alert("עדכון ניכשל")
        else props.dispatch(setSetting(result))
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
        <TextField onChange={(e) => setInstitutionId(e.target.value)} defaultValue={settingShifts.institutionId} id="outlined-basic" label="קוד מוסד" variant="outlined" className='textField ml-5' />
        <br />
        <TextField onChange={(e) => setSettingName(e.target.value)} id="outlined-basic" label="סוג הגדרה" variant="outlined" className='textField ml-5' />
        <br />
        <TextField onChange={(e) => setSettingValueInt(e.target.value)} id="outlined-basic" label="ערך מספרי" variant="outlined" className='textField ml-5' />
        <br />
        <TextField onChange={(e) => setSettingValueString(e.target.value)} id="outlined-basic" label="ערך מחזורתי" variant="outlined" className='textField ml-5' />
        <br />
        <TextField onChange={(e) => setSettingValueDate(e.target.value)} id="outlined-basic" label="תאריך " variant="outlined" className='textField ml-5' />
        <br />
        <Button className='ml-2' variant="contained" color="primary" onClick={() => update()}>
          אישור
        </Button>
      </form>
    </div>
  );
}
export default connect(mapStateToProps)(Setting)
