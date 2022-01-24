import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.css';
import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import API from '../../config/env/local'
// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>
// );
// function poup(person){
//   return(
//     <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>);
//   }

export default function FullCalendarApp() {
  const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [clickUser,setclickUser]=useState({employeeFirstName:"michal",employeeLastName:"prober",employeeAddress:"chazon hish",employeePhone:"0533114285",employeeEmail:"michalprober@gmail.com"})

    const handleClickOpenEmployee = (id) => {
      // fetch(`${API.LOGIN_URL}api/Employee/${id}`, {
      //   method: 'GET',
      //   // body: JSON.stringify({})
      // })
      //   .then(res => res.json()).then(data => {
      //     debugger;
      //     console.log(data)
      //     if (data.Data != null) {
      //       let employee = data.Data
      //       setclickUser(employee)
      //     }
      //     else alert("שגיאת מערכת")
      //   }
      //   ).catch(err => console.log(err.message))
      setOpen(true);
    };
  
    const handleCloseEmployee = () => {
      setOpen(false);
    };
  const events = [
    {
      id: 1,
      title: 'shoshna',
      start: '2021-10-03T00:00:00',
      end: '2021-10-03T07:00:00',
    },
    {
      id: 2,
      title: 'natan',
      start: '2021-10-03T00:00:00',
      end: '2021-10-03T07:00:00',
    },
    {
      id: 3,
      title: 'chayim',
      start: '2021-10-03T07:00:00',
      end: '2021-10-03T16:00:00',
      color:"green"
    },
    {
      id: 4,
      title: 'michal',
      start: '2021-10-03T16:00:00',
      end: '2021-10-03T23:59:60',
      color:"pink"
    },
    {
      id: 5,
      title: 'yael',
      start: '2021-10-03T16:00:00',
      end: '2021-10-03T23:59:60',
      color:"pink"
    },
    {
      id: 1,
      title: 'ester',
      start: '2021-10-04T00:00:00',
      end: '2021-10-04T07:00:00',
    },
    {
      id: 2,
      title: 'elchana',
      start: '2021-10-04T00:00:00',
      end: '2021-10-04T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2021-10-04T07:00:00',
      end: '2021-10-04T16:00:00',
      color:"green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2021-10-04T16:00:00',
      end: '2021-10-04T23:59:60',
      color:"pink"
    },
    {
      id: 5,
      title: 'tamar',
      start: '2021-10-04T16:00:00',
      end: '2021-10-04T23:59:60',
      color:"pink"
    },
    {
      id: 1,
      title: 'rivka',
      start: '2021-10-05T00:00:00',
      end: '2021-10-05T07:00:00',
    },
    {
      id: 2,
      title: 'sara',
      start: '2021-10-05T00:00:00',
      end: '2021-10-05T07:00:00',
    },
    {
      id: 3,
      title: 'chana',
      start: '2021-10-05T07:00:00',
      end: '2021-10-05T16:00:00',
      color:"green"
    },
    {
      id: 4,
      title: 'shira',
      start: '2021-10-05T16:00:00',
      end: '2021-10-05T23:59:60',
      color:"pink"
    },
    {
      id: 5,
      title: 'zvi',
      start: '2021-10-05T16:00:00',
      end: '2021-10-05T23:59:60',
      color:"pink"
    },
    {
      id: 1,
      title: 'ruth',
      start: '2021-10-06T00:00:00',
      end: '2021-10-06T07:00:00',
    },
    {
      id: 2,
      title: 'tamar',
      start: '2021-10-06T00:00:00',
      end: '2021-10-06T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2021-10-04T07:00:00',
      end: '2021-10-04T16:00:00',
      color:"green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2021-10-06T16:00:00',
      end: '2021-10-06T23:59:60',
      color:"pink"
    },
    {
      id: 5,
      title: 'levana',
      start: '2021-10-06T16:00:00',
      end: '2021-10-06T23:59:60',
      color:"pink"
    },
    {
      id: 3,
      title: 'chana',
      start: '2021-10-06T07:00:00',
      end: '2021-10-06T16:00:00',
      color:"green"
    }

    // { id: 3, title: 'event 3', start: '2021-08-27', end: '2021-08-27' },
  ];
    return (
      <div className="App">
        <FullCalendar
      headerToolbar={{
        center:'dayGridWeek,timeGridDay',
      }}
      themeSystem='bootstrap'   
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      theme= 'bootstrap3'    
      initialView="dayGridWeek"
          events={events}
          nowIndicator
           eventClick={handleClickOpenEmployee()}
           variant="outlined"  
        />

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleCloseEmployee}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {clickUser.employeeFirstName} {clickUser.employeeLastName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {clickUser.employeePhone}
              <br/>
              {clickUser.employeeEmail}
              <br/>
              {clickUser.employeeAddress}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEmployee} autoFocus>
              סגירה
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}