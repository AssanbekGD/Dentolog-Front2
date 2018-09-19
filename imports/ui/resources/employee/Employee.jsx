import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Grid } from 'semantic-ui-react';



export default class Employee extends Component {


  render() {
    return <div>

<Form>
  <Header as="h5">ФИО</Header>
  <hr/>
  <Form.Group>
    <Form.Input
   inline
   label="Фамилия"
    />
    <Form.Input
     inline
     label="Имя"
      />
    <Form.Input
     inline
     label="Отчество"
      />
 </Form.Group>

 <Header as="h5">Телефон/Gmail</Header>
 <hr/>
 <Form.Group>
   <Form.Input
  inline
  label="Домашний телефон"
   />
   <Form.Input
    inline
    label="Сотовый телефон"
     />
   <Form.Input
    inline
    label ="Email"
     />
</Form.Group>
<Header as="h5">Адрес</Header>
<hr/>
<Form.Group>
  <Form.Input
 inline
 label="Город"
  />
  <Form.Input
   inline
   label="Улица"
    />
  <Form.Input
   inline
   label="Дом"
    />
      <Form.Input
       inline
       label="Квартира"
        />
</Form.Group>
<hr/>
<Form.Dropdown
 inline
 label="Профессия"
 placeholder="Профессия"
  />
  <Form.Input
    width={200}
   inline
   label="Коментарий"
    />

<Form.Button>Добавить</Form.Button>
</Form>

</div>
  }
}
