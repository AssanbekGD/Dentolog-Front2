import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {Personals} from '/imports/api/Personals.js';

export default class Personal extends Component {


  render() {
    return (
      <div>
        <Form>
          <Form.Input
            name
        placeholder="Персонал"
          />
        <Form.Button>Добавить</Form.Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>№</Table.HeaderCell>
              <Table.HeaderCell>Название</Table.HeaderCell>

            </Table.Row>
          </Table.Header>
         </Table>
         <Form.Button>Редактировать</Form.Button>
         <Form.Button>Удалить</Form.Button>
         </Form>
      </div>
    );
  }
}
