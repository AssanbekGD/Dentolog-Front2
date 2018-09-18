import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table } from 'semantic-ui-react';

const yearOptions = [
  { key: '2018', value: '2018', text: '2018' },
  { key: '2019', value: '2019', text: '2019' },
  { key: '2020', value: '2020', text: '2020' },
];

const monthsOptions = [
  { key: 'January', value: 'January', text: 'Январь' },
  { key: 'February', value: 'February', text: 'Февраль' },
  { key: 'March', value: 'March', text: 'Март' },
      { key: 'April', value: 'April', text: 'Апрель' },
        { key: 'May', value: 'May', text: 'Май' },
          { key: 'June', value: 'June', text: 'Июнь' },
            { key: 'July', value: 'July', text: 'Июль' },
              { key: 'August', value: 'August', text: 'Август' },
                { key: 'September', value: 'September', text: 'Сентябрь' },
                  { key: 'October', value: 'October', text: 'Октябрь' },
                  { key: 'Nevember', value: 'Nevember', text: 'Ноябрь' },
                  { key: 'December', value: 'December', text: 'Декабрь' },
];

const departmentOptions = [
  { key: 'Therapy', value: 'Therapy', text: 'Терапия' },
  { key: 'Surgery', value: 'Surgery', text: 'Хирургия' },
  { key: 'Periodontology', value: 'Periodontology', text: 'Пародонтология' },
  { key: 'Orthopedic', value: 'Orthopedic', text: 'Ортопедическая' },
];

export default class Storage extends Component {
  render() {
    return <div>

  <Form>
    <Form.Group widths="equal">
      <Form.Dropdown
        placeholder="Категория"
        search
        selection
        options
      />
      <Form.Dropdown
        placeholder="Отделение"
        search
        selection
        options={departmentOptions}
      />
    </Form.Group>

      <Form.Group widths="equal">
        <Form.Dropdown
          placeholder="Год"
          search
          selection
          options={yearOptions}
        />
        <Form.Dropdown
          placeholder="Месяц"
          search
          selection
          options={monthsOptions}
        />
        <Form.Input
          placeholder="От"
          search
          selection
          options
        />
        -
        <Form.Input
          placeholder="До"
          search
          selection
          options
        />
      </Form.Group>
</Form>

<Table celled>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>№</Table.HeaderCell>
      <Table.HeaderCell>Отделение</Table.HeaderCell>
      <Table.HeaderCell>Категория</Table.HeaderCell>
      <Table.HeaderCell>КТРУ</Table.HeaderCell>
      <Table.HeaderCell>Серия</Table.HeaderCell>
      <Table.HeaderCell>Срок годности</Table.HeaderCell>
      <Table.HeaderCell>Цена закупочная</Table.HeaderCell>
      <Table.HeaderCell>Поставщик</Table.HeaderCell>
      <Table.HeaderCell>Штрих код</Table.HeaderCell>
      <Table.HeaderCell>Наименование</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
 </Table>
<Form.Button>Заявка на приобретение</Form.Button>

</div>
  }
}
