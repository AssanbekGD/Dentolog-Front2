import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Menu,Grid } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import  PatientHistory from '/imports/ui/patientHistory/PatientHistory';

const appealOptions = [
  { key: 'appeal', value: 'appeal', text: 'Боль' },
  { key: 'appeal', value: 'appeal', text: 'Кровь' },
  { key: 'appeal', value: 'appeal', text: 'Гной' },
];

const diagnosisOptions = [
  { key: 'diagnos1', value: 'diagnos1', text: 'Адентия' },
  { key: 'diagnos2', value: 'diagnos2', text: 'Абсцесс околочелюстной' },
  { key: 'diagnos3', value: 'diagnos3', text: 'Аллергический стоматит (АС)' },
    { key: 'diagnos4', value: 'diagnos4', text: 'Альвеолит' },
      { key: 'diagnos5', value: 'diagnos5', text: 'Анкилоз ВНЧС (АВНЧС)' },
        { key: 'diagnos6', value: 'diagnos6', text: 'Вывих зуба' },
          { key: 'diagnos7', value: 'diagnos7', text: 'Галитоз' },
];


export default class Treatment extends Component {
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
      <div>
       <Header as="h4">Информация о пациенте</Header>
            <hr/>
<Item>
  <div class="ui items">
    <div class="item">
        <Item.Image><img src="/images/wireframe/image.png"/></Item.Image>
      <div class="middle aligned content">
        <div class="ui list">
<div class="item">
<i class="users icon"></i>
<div class="content">
ФИО:
</div>
</div>
<div class="item">
<i class="phone icon"></i>
<div class="content">
Тел:
</div>
</div>
<div class="item">
<i class="mail icon"></i>
<div class="content">
<a href="">Email:</a>
</div>
</div>
</div>
        </div>
        <Grid>
          <Grid.Column width={3}>
            <Menu vertical>
              {this.renderMenuItem('patientHistory', 'История болезней')}
            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
             <Switch>
                <Route path="/patientHistory/PatientHistory" component={PatientHistory} />
              </Switch>
          </Grid.Column>
        </Grid>

      </div>
    </div>
</Item>
</div>
    <hr/>
<div class="consultation">
<Header as="h4">Консультация</Header>
  <hr/>
<Form>
  <Form.Group widths="equal">
    <Form.Dropdown
      placeholder="Обращение"
      search
      selection
      options={appealOptions}
        />
    <Form.Dropdown
      placeholder="Диагноз"
      search
      selection
      options={diagnosisOptions}
    />
  </Form.Group>
  <Form.Group  widths="equal">
  <Form.Checkbox
  label="Дентальный"
  />
  <Form.Checkbox
    label="Понорамный"
    />
  <Form.Checkbox
    label="КТ"
    />
    <Form.Button class="ui right floated ">Отправить на Рентген</Form.Button>
</Form.Group>
<Form.Group>
  <Form.Input
  inline
  label="Введите номер зубов"
  placeholder="Введите номер зубов"
  />
</Form.Group>


<hr/>


<Header as="h4">Лечение</Header>
<hr/>
<Form.Group>
  <Segment>
    <Header as="h5">Лечение</Header>
    <Form.Input
    inline
    label="№ зуба"
    />
    <Form.Dropdown
      placeholder="Вид услуги"
      search
      selection
      options />
      <Form.Dropdown
        placeholder="Вид услуги"
        search
        selection
        options />
        <Form.Dropdown
          placeholder="Вид услуги"
          search
          selection
          options />
    </Segment>

    <Segment>
      <Header as="h5">Список используемых материалов:</Header>
      <Form.Group widths="equal">
        <Form.Checkbox
          label="Материал"
          />
          <Form.Input inline
          label="ШТ" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Checkbox
          label="Материал"
          />
        <Form.Input inline
        label="ШТ" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Checkbox
          label="Материал"
          />
          <Form.Input inline
          label="ШТ" />
    </Form.Group>
              <Form.Button>Расширенный список</Form.Button>
      </Segment>
</Form.Group>

<Form.Group>
  <Form.Button>+ Добавить лечение</Form.Button>
</Form.Group>
</Form>
<Button>Сохранить</Button>
</div>
</div>
  }
}
