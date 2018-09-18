import React, { Component } from 'react';
import { Form, Table, Button, Icon } from 'semantic-ui-react';

export default class SelectPatient extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Input placeholder="Имя, Фамилия, Телефон, ИИН" action="Поиск" />
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
              <Table.HeaderCell>Действия</Table.HeaderCell>
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
              <Table.Cell>
                <Button>Выбрать</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Amanbayev</Table.Cell>
              <Table.Cell>Talgat</Table.Cell>
              <Table.Cell>Zh</Table.Cell>
              <Table.Cell>123123123123</Table.Cell>
              <Table.Cell>7052224444</Table.Cell>
              <Table.Cell>
                <Button>Выбрать</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Amanbayev</Table.Cell>
              <Table.Cell>Talgat</Table.Cell>
              <Table.Cell>Zh</Table.Cell>
              <Table.Cell>123123123123</Table.Cell>
              <Table.Cell>7052224444</Table.Cell>
              <Table.Cell>
                <Button>Выбрать</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Amanbayev</Table.Cell>
              <Table.Cell>Talgat</Table.Cell>
              <Table.Cell>Zh</Table.Cell>
              <Table.Cell>123123123123</Table.Cell>
              <Table.Cell>7052224444</Table.Cell>
              <Table.Cell>
                <Button>Выбрать</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Amanbayev</Table.Cell>
              <Table.Cell>Talgat</Table.Cell>
              <Table.Cell>Zh</Table.Cell>
              <Table.Cell>123123123123</Table.Cell>
              <Table.Cell>7052224444</Table.Cell>
              <Table.Cell>
                <Button>Выбрать</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Amanbayev</Table.Cell>
              <Table.Cell>Talgat</Table.Cell>
              <Table.Cell>Zh</Table.Cell>
              <Table.Cell>123123123123</Table.Cell>
              <Table.Cell>7052224444</Table.Cell>
              <Table.Cell>
                <Button>Выбрать</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button primary>
          <Icon name="user plus" />
          Новый клиент
        </Button>
      </div>
    );
  }
}
