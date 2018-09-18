import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table } from 'semantic-ui-react';

const filterOptions = [
  { key: 'filter1', value: 'filter1', text: 'Имя' },
  { key: 'filter2', value: 'filter2', text: 'Фамилия' },

];

export default class History extends Component {
  render() {
    return <div>

        <Form>
          <Form.Group widths="equal">
            <Form.Input placeholder="Имя, Фамилия, Телефон, ИИН,Номер полиса"  />
            <Form.Dropdown
              placeholder="Фильтр"
              search
              selection
              options={ filterOptions}
             />
          </Form.Group>
       </Form>
       <Table celled>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>№</Table.HeaderCell>
             <Table.HeaderCell>Фамилия</Table.HeaderCell>
             <Table.HeaderCell>Имя</Table.HeaderCell>
             <Table.HeaderCell>Отчество</Table.HeaderCell>
             <Table.HeaderCell>ИИН</Table.HeaderCell>
             <Table.HeaderCell>Номер телефона</Table.HeaderCell>
             <Table.HeaderCell>Email</Table.HeaderCell>
             <Table.HeaderCell>Номер полиса</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
           <Table.Row>
             <Table.Cell>1</Table.Cell>
             <Table.Cell>Amanbayev</Table.Cell>
             <Table.Cell>Talgat</Table.Cell>
             <Table.Cell>Zh</Table.Cell>
             <Table.Cell>123123123123</Table.Cell>
             <Table.Cell>7052224444</Table.Cell>
             <Table.Cell>gmail.com</Table.Cell>
             <Table.Cell>125498792</Table.Cell>
           </Table.Row>
         </Table.Body>
        </Table>

</div>
  }
}
