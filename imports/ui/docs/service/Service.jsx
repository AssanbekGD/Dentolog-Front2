import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {Services} from '/imports/api/Services.js';

const renderService = function (renderService) {
  return renderService.map(function (sService) {
    return  <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{sService.name}</Table.Cell>
        </Table.Row>
      </Table.Body>;
    </Table>

  });
};

const handleSubmit = function (e) {
  let serviceName = e.target.serviceName.value;
  e.preventDefault();

  if (serviceName) {
    e.target.serviceName.value = '';
    Services.insert({
      name: serviceName,
    });
  }
};



export default class Service extends Component {
  render() {
    Tracker.autorun(function(){
      let services = Services.find().fetch();
    });
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="serviceName"
        placeholder="Обслуживание"
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
