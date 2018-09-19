import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Item,Form, Image,Header,Button,Segment,Table,Grid,Menu } from 'semantic-ui-react';
import Employee from '/imports/ui/resources/employee/Employee.jsx';
import Shedule from '/imports/ui/resources/shedule/Shedule.jsx';

const filterOptions = [
  { key: 'filter1', value: 'filter1', text: 'Имя' },
  { key: 'filter2', value: 'filter2', text: 'Фамилия' },

];

export default class Resources extends Component {
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
        <Form>
          <Form.Group >
          <Grid>
              <Grid.Column >
                <Menu vertical>
                  {this.renderMenuItem('shedule', 'График работы')}
                </Menu>
              </Grid.Column>
              <Grid.Column >
                 <Switch>
                    <Route path="/shedule" component={Shedule} />
                  </Switch>
              </Grid.Column>
            </Grid>

            <Form.Dropdown
              placeholder="Фильтр"
              search
              selection
              options={filterOptions} />

          </Form.Group>
          <Form.Group widths="equal">
            <Grid>
              <Grid.Column >
                <Menu vertical>
                  {this.renderMenuItem('employee', 'Сотрудники')}
                </Menu>
              </Grid.Column>
              <Grid.Column>
                 <Switch>
                    <Route path="/employee" component={Employee} />
                  </Switch>
              </Grid.Column>
            </Grid>
            <Form.Input placeholder="Имя, Фамилия, Телефон, ИИН,Номер полиса"  />

          </Form.Group>

       <Table celled>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>№</Table.HeaderCell>
             <Table.HeaderCell>Фамилия</Table.HeaderCell>
             <Table.HeaderCell>Имя</Table.HeaderCell>
             <Table.HeaderCell>Профессия</Table.HeaderCell>
          </Table.Row>
         </Table.Header>
         <Table.Body>
           <Table.Row>
             <Table.Cell>1</Table.Cell>
             <Table.Cell>Асанбек</Table.Cell>
             <Table.Cell>Гани</Table.Cell>
             <Table.Cell>Хирург</Table.Cell>
             </Table.Row>
         </Table.Body>
        </Table>
        <Form.Group float="right" >
        <Form.Button>Удалить</Form.Button>
        <Form.Button>Редактировать</Form.Button>
        <Form.Button>Добавить</Form.Button>
        </Form.Group>
   </Form>
</div>
  }
}
