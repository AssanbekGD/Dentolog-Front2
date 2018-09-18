import React, { Component } from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import { Header } from 'semantic-ui-react';
import moment from 'moment';

let events = [
  {
    title: 'Zubnoi',
    start: '2018-09-10T11:30:00',
    end: '2018-09-10T12:00:00',
  },
  {
    title: 'Long Event',
    start: '2018-09-10',
    end: '2018-09-11',
  },
];

export default class Queue extends Component {
  state = {
    events,
  };
  render() {
    return (
      <div>
        <Header as="h4">Электронная очередь</Header>
        <FullCalendar
          allDaySlot={false}
          minTime="09:00"
          maxTime="20:00"
          dayClick={(date, jsEvent, view) => {
            // console.log(moment(date).format('MM.DD.YYYY HH:mm'));
            events.push({ title: 'clicked', start: date });
            console.log(events);
            this.setState({
              events: events,
            });
          }}
          slotDuration="00:30:00"
          firstDay={1}
          defaultView="agendaWeek"
          defaultDate={'2018-09-12'}
          editable={false}
          events={this.state.events}
        />
      </div>
    );
  }
}
