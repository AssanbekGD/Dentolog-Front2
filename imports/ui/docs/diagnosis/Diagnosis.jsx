import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {Diagnos} from '/imports/api/Diagnos.js';

const renderDiagnosis = function (renderDiagnosis) {
  return renderDiagnosis.map(function (dDiagnosis) {
    return  <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{dDiagnosis.name}</Table.Cell>
        </Table.Row>
      </Table.Body>;
    </Table>

  });
};

const handleSubmit = function (e) {
  let diagnosisName = e.target.diagnosisName.value;
  e.preventDefault();

  if (diagnosisName) {
    e.target.diagnosisName.value = '';
    Diagnos.insert({
      name: diagnosisName,
    });
  }
};

export default class Diagnosis extends Component {
render() {
  Tracker.autorun(function(){
    let diagnos = Diagnos.find().fetch();
  });
    return (
      <div>
<Form onSubmit={handleSubmit}>
  <Form.Input
    name="diagnosisName"
placeholder="Диагноз"
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
