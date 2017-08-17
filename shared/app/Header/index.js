import React, { Component } from 'react';
// import Logo from './Logo';
import Menu from './Menu';

class Header extends Component {
  render() {
    return <Menu sidebarTrigger={this.props.sidebarTrigger} />;
  }
}

export default Header;
