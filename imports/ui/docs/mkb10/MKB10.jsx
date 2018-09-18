import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {Mkb} from '/imports/api/Mkb.js';

const renderMkb10 = function (renderMkb10) {
  return renderMkb10.map(function (mMkb10) {
    return  <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{mMkb10.name}</Table.Cell>
        </Table.Row>
      </Table.Body>;
    </Table>

  });
};

const handleSubmit = function (e) {
  let mkb10Name = e.target.mkb10Name.value;
  e.preventDefault();

  if (mkb10Name) {
    e.target.mkb10Name.value = '';
    Mkb.insert({
      name: mkb10Name,
    });
  }
};


export default class MKB10 extends Component {
  render() {
    Tracker.autorun(function(){
      let mkb = Mkb.find().fetch();
    });
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="mkb10Name"
        placeholder="МКБ-10"
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
