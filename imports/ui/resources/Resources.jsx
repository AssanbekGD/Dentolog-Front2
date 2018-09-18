import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table } from 'semantic-ui-react';

const filterOptions = [
  { key: 'filter1', value: 'filter1', text: 'Имя' },
  { key: 'filter2', value: 'filter2', text: 'Фамилия' },

];

export default class Resources extends Component {
  render() {
    return <div>
        <Form>
          <Form.Group widths="equal">
          <Form.Button>Сотрудники</Form.Button>
          <Form.Button>График работы</Form.Button>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input placeholder="Имя, Фамилия, Телефон, ИИН,Номер полиса"  />
            <Form.Dropdown
              placeholder="Фильтр"
              search
              selection
              options={filterOptions} />
          </Form.Group>

       <Table celled>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>№</Table.HeaderCell>
             <Table.HeaderCell>Фамилия</Table.HeaderCell>
             <Table.HeaderCell>Имя</Table.HeaderCell>
             <Table.HeaderCell>Профессия</Table.HeaderCell>
          </Table.Row>
         </Table.Header>
         <Table.Body>
           <Table.Row>
             <Table.Cell>1</Table.Cell>
             <Table.Cell>Асанбек</Table.Cell>
             <Table.Cell>Гани</Table.Cell>
             <Table.Cell>Хирург</Table.Cell>
             </Table.Row>
         </Table.Body>
        </Table>
        <Form.Group float="right" >
        <Form.Button>Удалить</Form.Button>
        <Form.Button>Редактировать</Form.Button>
        <Form.Button>Добавить</Form.Button>
        </Form.Group>
   </Form>
</div>
  }
}
