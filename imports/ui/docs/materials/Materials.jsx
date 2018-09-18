import React, { Component } from 'react';
import { Menu, Grid, Container, Segment,Form,Table } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {Material} from '/imports/api/Material.js';

const renderMaterial = function (renMaterial) {
  return renMaterial.map(function (mMaterial) {
    return  <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{mMaterial.name}</Table.Cell>
          <Table.Cell>{mMaterial.shtuk}</Table.Cell>
        </Table.Row>
      </Table.Body>;
    </Table>

  });
};

const handleSubmit = function (e) {
  let materialName = e.target.materialName.value;
  let Shtuk = e.target.Shtuk.value;
  e.preventDefault();

  if (materialName) {
    e.target.materialName.value = '';
    e.target.Shtuk.value = '';
    Material.insert({
      name: materialName,
      shtuk:Shtuk
    });
  }
};

export default class Materials extends Component {
  render()
   {
    Tracker.autorun(function(){
      let material = Material.find().fetch();
    });
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="materialName"
        placeholder="Материал"
          />
          <Form.Input
            name="Shtuk"
        placeholder="ШТ"
          />
        <Form.Button>Добавить</Form.Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>№</Table.HeaderCell>
              <Table.HeaderCell>Название</Table.HeaderCell>
              <Table.HeaderCell>ШТ</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
         </Table>
          {/*{renderMaterial(materials)}*/}
         <Form.Button>Редактировать</Form.Button>
         <Form.Button>Удалить</Form.Button>
         </Form>

      </div>
    );
  }
}
