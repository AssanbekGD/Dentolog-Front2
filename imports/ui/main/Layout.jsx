import React, { Component } from 'react';
import { Menu, Grid, Container, Segment } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';


import TopHeader from './TopHeader';
import Queue from '/imports/ui/queue/Queue';
import Treatment from '/imports/ui/treatment/Treatment';
import Registrar from '/imports/ui/registrar/Registrar';
import History from '/imports/ui/history/History';
import Resources from '/imports/ui/resources/Resources';
import  Storage from '/imports/ui/storage/Storage';
import  Docs from '/imports/ui/docs/Docs';
import  Materials from '/imports/ui/docs/materials/Materials.jsx';
import  Personal from '/imports/ui/docs/personal/Personal.jsx';
import  Diagnosis from '/imports/ui/docs/diagnosis/Diagnosis.jsx';
import  MKB10 from '/imports/ui/docs/mkb10/MKB10.jsx';
import  Service from '/imports/ui/docs/service/Service.jsx';
import Status from '/imports/ui/docs/status/Status.jsx';
import PatientHistory from '/imports/ui/patientHistory/PatientHistory.jsx';
import Employee from '/imports/ui/resources/employee/Employee.jsx';
import Shedule from '/imports/ui/resources/shedule/Shedule.jsx';


export default class Layout extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMenuItem(name, displayName) {
    const url = '/' + name;
    return (
      <Menu.Item
        as={Link}
        to={url}
        name={name}
        active={this.state.activeItem === name}
        onClick={this.handleItemClick}
      >
        {displayName}
      </Menu.Item>
    );
  }

  render() {
    return (
      <div>
        <TopHeader />
        <Container>
          <Grid>
            <Grid.Column width={3}>
              <Menu vertical>

                {this.renderMenuItem('registrar', 'Регистратура')}
                {this.renderMenuItem('queue', 'Электронная очередь')}
                {this.renderMenuItem('treatment', 'Лечение')}
                {this.renderMenuItem('history', 'Истории болезней')}
                {this.renderMenuItem('reports', 'Отчетность')}
                {this.renderMenuItem('monitoring', 'Мониторинг')}
                {this.renderMenuItem('resources', 'Управление ресурсами')}
                {this.renderMenuItem('storage', 'Склад')}
                {this.renderMenuItem('docs', 'НСИ')}

              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <Segment>
                <Switch>
                  <Route path="/queue" component={Queue} />
                  <Route path="/registrar" component={Registrar} />
                  <Route path="/treatment" component={Treatment} />
                  <Route path="/history" component={History} />
                  <Route path="/resources" component={Resources} />
                  <Route path="/storage" component={Storage} />
                  <Route path="/docs" component={Docs} />
                 <Route path="/materials" component={Materials} />
                 <Route path="/diagnosis" component={Diagnosis} />
                 <Route path="/service" component={Service} />
                 <Route path="/mkb10" component={MKB10} />
                 <Route path="/status" component={Status} />
                 <Route path="/patientHistory" component={PatientHistory} />
                 <Route path="/employee" component={Employee} />
                 <Route path="/shedule" component={Shedule} />

                </Switch>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
