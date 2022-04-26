import React, { useEffect, useState } from 'react';
import './ScheduleEmployee.css';
import { connect } from 'react-redux';
import API from '../../config/env/local'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function mapStateToProps(state) {
  return {
    employee: state.user,

  };
}

function ScheduleEmployee(props) {
    const [colorday, setcolorday] = useState(['','','','','','',''])
    const[colorShifts1,setcolorShifts1]= useState(['','',''])
    const[colorShifts2,setcolorShifts2]= useState(['','',''])
    const[colorShifts3,setcolorShifts3]= useState(['','',''])
    const[colorShifts4,setcolorShifts4]= useState(['','',''])
    const[colorShifts5,setcolorShifts5]= useState(['','',''])
    const[colorShifts6,setcolorShifts6]= useState(['','',''])
    const[colorShifts7,setcolorShifts7]= useState(['','',''])
    const [alertError,setalertError]=useState(false)
    const [alertSuccess,setalertSuccess]=useState(false)
    const [alertInfo,setalertInfo]=useState(false)
    const [alertErrorDay,setalertErrorDay]=useState(false)

  const [shifts, setshifts] = useState([,])
  const { employee } = props

  let listWhite = ['', '', '', '', '', '', '']
  let listColor = colorday

  let listWhiteShifts = ['', '', '']
  let listColorShifts1 = colorShifts1
  let listColorShifts2 = colorShifts2
  let listColorShifts3 = colorShifts3
  let listColorShifts4 = colorShifts4
  let listColorShifts5 = colorShifts5
  let listColorShifts6 = colorShifts6
  let listColorShifts7 = colorShifts7




    useEffect(() => {
        
        // fetch(`${API.LOGIN_URL}ShiftInstitution/getInstitutionShifts`,{
        //   method: 'GET',
        // }).then(res => res.json()).then(data => {
        //      
        //      if (data.Data != null) 
        //         {setshifts(data.Data)
        //         console.log(data.Data)}
        //      else alert("אין  משמרות במערכת")
        //   }
        //   ).catch(err => console.log(err.message))
        fetch(`${API.LOGIN_URL}Constraint/getConstraintEmployee?id=${employee.id}`)
        .then(response => response.json())
        .then(result => {
          console.log(result)
         
      if (result.Data !== null)
      {
      for(let i=0; i<result.Data.length; i++){
      let colorShifts='colorShifts'.concat(Number(result.Data[i].dayInWeek))
      // alert(colorShifts)
      if(result.Data[i].shiftId==0)
          {
          listColor[result.Data[i].dayInWeek-1]='rgb(182, 77, 112)'
          setcolorday([...listColor])
        } 
     else if(colorday[result.Data[i].dayInWeek-1]!=='rgb(182, 77, 112)')
      {
      if(colorShifts==='colorShifts1')
      {  
        listColorShifts1[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts1([...listColorShifts1])
      }
      else if(colorShifts==='colorShifts2')
      { 
        listColorShifts2[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts2([...listColorShifts2])
      }
      else if(colorShifts==='colorShifts3')
      { 
      listColorShifts3[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
      setcolorShifts3([...listColorShifts3])
      }
      else if(colorShifts==='colorShifts4')
      {       
       
      listColorShifts4[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
      setcolorShifts4([...listColorShifts4])
      }
      else if(colorShifts==='colorShifts5')
      { 
        listColorShifts5[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts5([...listColorShifts5])
      }
      else if(colorShifts==='colorShifts6')
      { 
        listColorShifts6[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts6([...listColorShifts6])
      }
      else 
      {
         
        listColorShifts7[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts7([...listColorShifts7])
      }}
    }}
    else console.log("error")
  })
  .catch(error => console.log(error));
  
},[])
 
    const checkFreeDay=(id)=>{
      setalertError(false)
      setalertSuccess(false)
      setalertErrorDay(false)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "employeeInInstitutionId": employee.id,
      "dayInWeek": Number(id) + 1,
      "shiftId": 0,
      "dateOfCreate": ''
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${API.LOGIN_URL}Constraint/PostConstraintDay`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        
        if (result.Data !== null)
        {
          // if(colorday[id]==='rgb(182, 77, 112)')
          // listColor[id]='white'
          // else {
          if (id == 0) {
            listColorShifts1 = listWhiteShifts
            setcolorShifts1([...listColorShifts1])
          }
          else if (id == 1) {
            listColorShifts2 = listWhiteShifts
            setcolorShifts2([...listColorShifts2])
          }
          else if (id == 2) {
            listColorShifts3 = listWhiteShifts
            setcolorShifts3([...listColorShifts3])
          }
          if (id == 3) {
            listColorShifts4 = listWhiteShifts
            setcolorShifts4([...listColorShifts4])
          }
          if (id == 4) {
            listColorShifts5 = listWhiteShifts
            setcolorShifts5([...listColorShifts5])
          }
          if (id == 5) {
            listColorShifts6 = listWhiteShifts
            setcolorShifts6([...listColorShifts6])
          }
          if (id == 6) {
            listColorShifts7 = listWhiteShifts
            setcolorShifts7([...listColorShifts7])
          }
          listColor = listWhite
          listColor[id] = 'rgb(182, 77, 112)'
          setcolorday([...listColor])
        }
        else setalertErrorDay(true)
      })
      .catch(error => console.log(error));
    }
let count=0;
      const checkFreeShift=(id)=>{
        setalertError(false)
        setalertSuccess(false)
        setalertErrorDay(false)
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "employeeInInstitutionId":employee.id,
          "dayInWeek":Number(id.charAt(0))+1,
          "shiftId":Number(id.charAt(1))+1,
          "dateOfCreate":''
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch(`${API.LOGIN_URL}Constraint/PostConstraintShift`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
             
        if (result.Data !== null)
        {
        for(let i=0; i<result.Data.length; i++){
        let colorShifts='colorShifts'.concat(Number(result.Data[i].dayInWeek))
        // alert(colorShifts)
        if(colorday[result.Data[i].dayInWeek-1]!=='rgb(182, 77, 112)')
        {
        if(colorShifts==='colorShifts1')
        { 
          listColorShifts1=listWhiteShifts
          listColorShifts1[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
          setcolorShifts1([...listColorShifts1])
        }
        else if(colorShifts==='colorShifts2')
        { listColorShifts2=listWhiteShifts      
          listColorShifts2[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
          setcolorShifts2([...listColorShifts2])
        }
        else if(colorShifts==='colorShifts3')
        {
          listColorShifts3=listWhiteShifts
        listColorShifts3[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts3([...listColorShifts3])
        }
        else if(colorShifts==='colorShifts4')
        {  
          listColorShifts4=listWhiteShifts     
        listColorShifts4[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
        setcolorShifts4([...listColorShifts4])
        }
        else if(colorShifts==='colorShifts5')
        {
          listColorShifts5=listWhiteShifts
          listColorShifts5[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
          setcolorShifts5([...listColorShifts5])
        }
        else if(colorShifts==='colorShifts6')
        {
          listColorShifts6=listWhiteShifts
          listColorShifts6[result.Data[i].shiftId-1]='rgb(204, 149, 182)'
          setcolorShifts6([...listColorShifts6])
        }
        else setalertError(true)
      })
      .catch(error => console.log(error));
  }

  const OK = () => {
    setalertSuccess(true)
    setalertInfo(false)
    setalertError(false)
  }
  return (
    <>
    <div className="shifts">
      
    <Button
             style={{width:'50px', height:'50px',  margin:'50px',padding:'50px'}}
            variant="contained"
            color="primary"
            onClick={()=>OK()}
          >
            אישור
          </Button>
         
          <div>
          <p style={{float:"left" , fontSize:"70%",  position: "absolute",top: 210,right: 1040,padding: 0,margin:0,color:"rgb(18, 26, 133)"}}>.ניתן לבחור יום חופש אחד בשבוע *</p>
          {/* <br/> */}
          <p style={{float:"left" , fontSize:"70%",  position: "absolute",top: 240,right: 1040,padding: 0,margin:0,color:"rgb(18, 26, 133)"}}>.ניתן לבחור עד שתי משמרות חופשיות ביום *</p>
      <Stack sx={{ width: '100%' }} spacing={2}>
      {alertError==true&&<Stack sx={{ width: '100%',margin: '5px' }} spacing={2}>
      <Alert severity="error" dir="rtl">לא ניתן לבחור משמרת ביום חופש</Alert></Stack>}
      {alertErrorDay==true&&<Stack sx={{ width: '100%',margin: '5px' }} spacing={2}>
      <Alert severity="error" dir="rtl">אין אפשרות לבחור יום חופש ביום זה</Alert></Stack>}
      {alertInfo==true&&<Stack sx={{ width: '100%',margin: '5px' }} spacing={2}>
      <Alert severity="info" dir="rtl">ניתן לבחור עד 2 משמרות חופשיות ליום</Alert></Stack>}
      {alertSuccess==true&&<Stack sx={{ width: '100%',margin: '5px'}} spacing={2}>
      <Alert severity="success" dir="rtl">המשמרות נשמרו בהצלחה</Alert></Stack>}
    </Stack> 
      <table style={{margin:"0px"}}>
        <tr>
          {/* <th>{shifts[0]}</th>
          <th>{shifts[1]}</th>
          <th>{shifts[2]}</th> */}
              <th>יום</th>
              <th>בוקר</th>
              <th>צהרים</th>
              <th>לילה</th>
            </tr>
            <tr style={{ backgroundColor: colorday[0] }}>
              <td id='0' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>א</td>
              <td id='00' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts1[0] }}>8:00 - 16:00</td>
              <td id='01' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts1[1] }}>16:00 - 12:00</td>
              <td id='02' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts1[2] }}>12:00 - 8:00</td>
            </tr>
            <tr style={{ backgroundColor: colorday[1] }}>
              <td id='1' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>ב</td>
              <td id='10' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts2[0] }}>8:00 - 16:00</td>
              <td id='11' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts2[1] }}>16:00 - 12:00</td>
              <td id='12' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts2[2] }}>12:00 - 8:00</td>
            </tr>
            <tr style={{ backgroundColor: colorday[2] }}>
              <td id='2' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>ג</td>
              <td id='20' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts3[0] }}>8:00 - 16:00</td>
              <td id='21' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts3[1] }}>16:00 - 12:00</td>
              <td id='22' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts3[2] }}>12:00 - 8:00</td>
            </tr>
            <tr style={{ backgroundColor: colorday[3] }}>
              <td id='3' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>ד</td>
              <td id='30' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts4[0] }}>8:00 - 16:00</td>
              <td id='31' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts4[1] }}>16:00 - 12:00</td>
              <td id='32' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts4[2] }}>12:00 - 8:00</td>
            </tr>
            <tr style={{ backgroundColor: colorday[4] }}>
              <td id='4' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>ה</td>
              <td id='40' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts5[0] }}>8:00 - 16:00</td>
              <td id='41' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts5[1] }}>16:00 - 12:00</td>
              <td id='42' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts5[2] }}>12:00 - 8:00</td>
            </tr>
            <tr style={{ backgroundColor: colorday[5] }}>
              <td id='5' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>ו</td>
              <td id='50' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts6[0] }}>8:00 - 16:00</td>
              <td id='51' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts6[1] }}>16:00 - 12:00</td>
              <td id='52' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts6[2] }}>12:00 - 8:00</td>
            </tr>
            <tr style={{ backgroundColor: colorday[6] }}>
              <td id='6' onClick={(e) => checkFreeDay(e.target.id)} style={{ cursor: 'pointer' }}>ז</td>
              <td id='60' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts7[0] }}>8:00 - 16:00</td>
              <td id='61' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts7[1] }}>16:00 - 12:00</td>
              <td id='62' onClick={(e) => checkFreeShift(e.target.id)} style={{ cursor: 'pointer', backgroundColor: colorShifts7[2] }}>12:00 - 8:00</td>
            </tr>
          </table>
        </div>
      </div>

    </>
  );
}
export default connect(mapStateToProps)(ScheduleEmployee)