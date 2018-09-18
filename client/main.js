import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/components/icon.min.css';
import App from '/imports/ui/main/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('app-body'));
});
