import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';

import  Materials from '/imports/ui/docs/materials/Materials.jsx';
import  Personal from '/imports/ui/docs/personal/Personal.jsx';
import  Diagnosis from '/imports/ui/docs/diagnosis/Diagnosis.jsx';
import  MKB10 from '/imports/ui/docs/mkb10/MKB10.jsx';
import  Service from '/imports/ui/docs/service/Service.jsx';
import Status from '/imports/ui/docs/status/Status.jsx';


export default class Docs extends Component {
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

    return <div>
      <Container>
        <Grid>
          <Grid.Column width={3}>
            <Menu vertical>
              {this.renderMenuItem('materials', 'Материалы')}
              {this.renderMenuItem('personal', 'Персонал')}
              {this.renderMenuItem('service', 'Услуги')}
              {this.renderMenuItem('mkb10', 'МКБ-10')}
              {this.renderMenuItem('diagnosis', 'Диагнозы')}
              {this.renderMenuItem('status', 'Статус')}
          </Menu>
          </Grid.Column>
              <Switch>
                <Route path="/materials" component={Materials} />
                <Route path="/personal" component={Personal} />
                <Route path="/diagnosis" component={Diagnosis} />
                <Route path="/service" component={Service} />
                <Route path="/mkb10" component={MKB10} />
                 <Route path="/status" component={Status} />

              </Switch>
     </Grid>
      </Container>


    </div>
   }
  }
