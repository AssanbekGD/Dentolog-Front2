import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Grid } from 'semantic-ui-react';
import {Employees} from '/imports/api/Employees.js';

const renderEmployee = function (renderEmployee) {
  return renderEmployee.map(function (eEmployee) {
    return

  });
};

const handleSubmit = function (e) {
  let employeeSurname = e.target.employeeSurname.value;
  let employeeName = e.target.employeeName.value;
  let employeefName = e.target.employeefName.value;
  let employeeHomePhone = e.target.employeeHomePhone.value;
  let employeeMobilePhone = e.target.employeeMobilePhone.value;
  let employeeEmail = e.target.employeeEmail.value;
  let employeeCity = e.target.employeeCity.value;
  let employeeStreet = e.target.employeeStreet.value;
  let employeeHome = e.target.employeeHome.value;
    let employeeFlat = e.target.employeeFlat.value;
  e.preventDefault();

  if (employeeName) {
    e.target.employeeSurname.value = '';
      e.target.employeeName.value = '';
        e.target.employeefName.value = '';
          e.target.employeeHomePhone.value = '';
            e.target.employeeMobilePhone.value = '';
              e.target.employeeEmail.value = '';
                e.target.employeeCity.value = '';
                  e.target.employeeStreet.value = '';
                    e.target.employeeHome.value = '';
                      e.target.employeeFlat.value = '';

    Employees.insert({
      surname: employeeSurname,
      name: employeeName,
      Fname: employeefName,
      homePhone:employeeHomePhone,
      mobilePhone:employeeMobilePhone,
      email:employeeEmail,
      city:employeeCity,
      street:employeeStreet,
      home:employeeHome,
      flat:employeeFlat

    });
  }
};


export default class Employee extends Component {


  render() {
    Tracker.autorun(function(){
      let employees = Employees.find().fetch();
    });
    return <div>

<Form onSubmit={handleSubmit}>
  <Header as="h5">ФИО</Header>
  <hr/>
  <Form.Group>
    <Form.Input
      name="employeeSurname"
   inline
   label="Фамилия"
    />
    <Form.Input
      name="employeeName"
     inline
     label="Имя"
      />
    <Form.Input
      name="employeefName"
     inline
     label="Отчество"
      />
 </Form.Group>

 <Header as="h5">Телефон/Gmail</Header>
 <hr/>
 <Form.Group>
   <Form.Input
     name="employeeHomePhone"
  inline
  label="Домашний телефон"
   />
   <Form.Input
     name="employeeMobilePhone"
    inline
    label="Сотовый телефон"
     />
   <Form.Input
     name="employeeEmail"
    inline
    label ="Email"
     />
</Form.Group>
<Header as="h5">Адрес</Header>
<hr/>
<Form.Group>
  <Form.Input
    name="employeeCity"
 inline
 label="Город"
  />
  <Form.Input
    name="employeeStreet"
   inline
   label="Улица"
    />
  <Form.Input
    name="employeeHome"
   inline
   label="Дом"
    />
      <Form.Input
        name="employeeFlat"
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

   inline
   label="Коментарий"
    />

<Form.Button>Добавить</Form.Button>
</Form>

</div>
  }
}
