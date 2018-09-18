import React, { Component } from 'react';

import { Step, Header, Segment, Button } from 'semantic-ui-react';

import SelectPatient from '/imports/ui/registrar/SelectPatient';
import SelectDoctor from '/imports/ui/registrar/SelectDoctor';

export default class Registrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
    };
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleStepChange = () => {
    let newStep = this.state.activeStep + 1;
    if (newStep > 3) newStep = 1;
    this.setState({ activeStep: newStep });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleStepChange.bind(this)}>
          increase step
        </Button>
        <Header as="h4">Регистратура</Header>
        <Step.Group ordered attached="top">
          <Step
            active={this.state.activeStep === 1}
            completed={this.state.activeStep > 1}
          >
            <Step.Content>
              <Step.Title>Выбор пациента</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={this.state.activeStep === 2}
            completed={this.state.activeStep > 2}
          >
            <Step.Content>
              <Step.Title>Выбор врача</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={this.state.activeStep === 3}
            completed={this.state.activeStep > 3}
          >
            <Step.Content>
              <Step.Title>Подтверждение записи</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment>
          {this.state.activeStep === 1 && <SelectPatient />}
          {this.state.activeStep === 2 && <SelectDoctor />}
        </Segment>
      </div>
    );
  }
}
