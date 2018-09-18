import React, { Component } from 'react';

import { Menu, Container } from 'semantic-ui-react';

export default class TopHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Container>
          <Menu.Item header style={{ backgroundColor: '#00ff65' }}>
            Dentolog
          </Menu.Item>
          <Menu.Item>Фамилия И.О. врача</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="Помощь"
              active={activeItem === 'aboutUs'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Контакты"
              active={activeItem === 'aboutUs'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Выйти"
              active={activeItem === 'aboutUs'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
