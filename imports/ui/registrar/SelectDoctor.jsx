import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const zhalobaOptions = [
  { key: 'bol', value: 'bol', text: 'Боль в зубах' },
  { key: 'blood', value: 'blood', text: 'Кровоточат зубы' },
  { key: 'delete', value: 'delete', text: 'Запрос на удаление' },
];
const doctorOptions = [
  { key: 'doc1', value: 'doc1', text: 'Иванов Иван Иваныч' },
  { key: 'doc2', value: 'doc2', text: 'Петров Петр Петрович' },
  { key: 'doc3', value: 'doc3', text: 'Сидоров Сидор Сидорович' },
];

export default class SelectDoctor extends Component {
  render() {
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    moment.locale('ru', {
      months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_деакбрь'.split(
        '_',
      ),
      monthsShort: 'янв._фев._мар._апр._май_июн_июл._авг_сен._окт._ноя._дек.'.split(
        '_',
      ),
      monthsParseExact: true,
      weekdays: 'понедельник_вторник_среда_четверг_пятница_суббота_воскресенье'.split(
        '_',
      ),
      weekdaysShort: 'пон._вто._сре._чет._пят._суб._вос.'.split('_'),
      weekdaysMin: 'Пн_Вт_Ср_Чт_Пт_Сб_Вс'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: 'Сегодня',
        nextDay: 'Завтра',
        nextWeek: 'Следующая неделя',
        lastDay: 'Вчера',
        lastWeek: 'Прошлая неделя',
        sameElse: 'L',
      },
      week: {
        dow: 1, // Monday is the first day of the week.
      },
    });
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input readOnly value="Пациент ФИО" />
            <Form.Button>Выбрать другого пацинета</Form.Button>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Dropdown
              placeholder="Выберите жалобу"
              search
              selection
              options={zhalobaOptions}
            />
            <Form.Input readOnly value="Терапевт" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Dropdown
              placeholder="Выберите врача"
              search
              selection
              options={doctorOptions}
            />
            <Form.Input readOnly value="Ассистент ФИО" />
          </Form.Group>
          <BigCalendar
            defaultView={BigCalendar.Views.WEEK}
            events={[]}
            step={30}
            defaultDate={new Date()}
          />
        </Form>
      </div>
    );
  }
}
