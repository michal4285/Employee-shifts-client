import React, { useEffect, useState } from 'react';
import './ScheduleEmployee.css';
import { connect } from 'react-redux';
import API from '../../config/env/local'


function ScheduleEmployee(props) {
    const [color, setcolor] = useState(['white','white','white','white','white','white','white'])
    const [shifts, setshifts] = useState([,])

    let  listWhite=['white','white','white','white','white','white','white']
    let listColor=color

    useEffect(() => {
        debugger;
        fetch(`${API.LOGIN_URL}ShiftInstitution/getInstitutionShifts`,{
          method: 'GET',
        }).then(res => res.json()).then(data => {
             debugger;
             if (data.Data != null) 
                {setshifts(data.Data)
                console.log(data.Data)}
             else alert("אין  משמרות במערכת")
          }
          ).catch(err => console.log(err.message))
      },[])
 
       const checkFreeDay=(id)=>{
        debugger
         if(color[id]==='rgb(182, 77, 112)')
            listColor[id]='white'
         else {listColor=listWhite
         listColor[id]='rgb(182, 77, 112)'}
         setcolor([...listColor])
       }

       const checkFreeShift=(id)=>{
        debugger
         if(color[id]==='rgb(182, 77, 112)')
            listColor[id]='white'
         else {listColor=listWhite
         listColor[id]='rgb(182, 77, 112)'}
         setcolor([...listColor])
       }


    return (
    <>
    <div className="shifts">
      <table>
        <tr>
          {/* <th>{shifts[0]}</th>
          <th>{shifts[1]}</th>
          <th>{shifts[2]}</th> */}
          <th>יום</th>
          <th>בוקר</th>
          <th>צהרים</th>
          <th>לילה</th>
        </tr>
        <tr style={{backgroundColor:color[0]}}>
          <td id='0' onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>א</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
        <tr style={{backgroundColor:color[1]}}>
        <td id='1' onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>ב</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
        <tr style={{backgroundColor:color[2]}}>
        <td id='2'onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>ג</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
        <tr style={{backgroundColor:color[3]}}>
        <td id='3' onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>ד</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
        <tr style={{backgroundColor:color[4]}}>
        <td id='4' onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>ה</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
        <tr style={{backgroundColor:color[5]}}>
        <td id='5' onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>ו</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
        <tr style={{backgroundColor:color[6]}}>
        <td id='6' onClick={(e)=>checkFreeDay(e.target.id)} style={{cursor:'pointer'}}>ז</td>
          <td>8:00 - 16:00</td>
          <td>16:00 - 12:00</td>
          <td>12:00 - 8:00</td>
        </tr>
      </table>
    </div>
        </>
    );
}

export default ScheduleEmployee
