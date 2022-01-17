import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.css';
import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
          // eventClick={(e) =>poup(e)}
        />
      </div>
    );
  }

