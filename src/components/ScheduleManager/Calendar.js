import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.css';
import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
export default function FullCalendarApp() {

  const events = [
    {
      id: 1,
      title: 'shoshna',
      start: '2021-08-27T00:00:00',
      end: '2021-08-27T07:00:00',
    },
    {
      id: 2,
      title: 'natan',
      start: '2021-08-27T00:00:00',
      end: '2021-08-27T07:00:00',
    },
    {
      id: 3,
      title: 'chayim',
      start: '2021-08-27T07:00:00',
      end: '2021-08-27T16:00:00',
      color:"green"
    },
    {
      id: 4,
      title: 'michal',
      start: '2021-08-27T16:00:00',
      end: '2021-08-27T23:59:60',
      color:"pink"
    },
    {
      id: 5,
      title: 'yael',
      start: '2021-08-27T16:00:00',
      end: '2021-08-27T23:59:60',
      color:"pink"
    },
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
          eventClick={(e) => console.log(e.event.id)}
        />
      </div>
    );
  }