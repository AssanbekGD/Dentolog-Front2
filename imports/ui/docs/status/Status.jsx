import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {ToothStatus} from '/imports/api/ToothStatus.js';

const renderStatus = function (renStatus) {
  return renStatus.map(function (sStatus) {
    return  <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{sStatus.name}</Table.Cell>
          <Table.Cell>{sStatus.shtuk}</Table.Cell>
        </Table.Row>
      </Table.Body>;
    </Table>

  });
};

const handleSubmit = function (e) {
  let statusName = e.target.statusName.value;

  e.preventDefault();

  if (statusName) {
    e.target.statusName.value = '';
    ToothStatus.insert({
      name: statusName
    });
  }
};


export default class Status extends Component {
  render() {
    Tracker.autorun(function(){
      let toothStatus = ToothStatus.find().fetch();
    });
    return (
      <div>
<Form onSubmit={handleSubmit}>
  <Form.Input
    name="statusName"
placeholder="Статус зуба"
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
