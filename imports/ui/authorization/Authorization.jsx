import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid,Container } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import { Email } from 'meteor/email'

Meteor.startup( function() {
    process.env.MAIL_URL = "postmaster@sandbox2217a1a7402144c291626f60050c3fb9.mailgun.org:4d67865ec91365a16a4c1a475c900551-b0aac6d0-4feeec31smtp.mailgun.org";
    Accounts.emailTemplates.from="no-reply@yourdomain.com";
    Accounts.emailTemplates.sitename="My Site";

 Accounts.emailTemplates.verifyEmail.subject = function(user) {
   return 'Confirm Your Email Address';
 };
 Accounts.emailTemplates.verifyEmail.text = function(user,url) {
   return 'click on the following link to verify your email address: ' + url;
 };

      Accounts.emailTemplates.
Accounts.config({
  sendVerificationEmail:true
})
});

export default class Authorization extends Component {



render() {

    return (
<div>

<Form >
<Form.Input
    name
placeholder="Email"
  />
  <Form.Input
      name
  placeholder="Пароль"
    />
 </Form>

     </div>
    );
  }
}
