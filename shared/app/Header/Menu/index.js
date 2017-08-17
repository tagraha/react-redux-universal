import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

class Menu extends Component {
  render() {
    const { sidebarTrigger } = this.props;
    return (
      <nav className="nav has-shadow is-fixed">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" id="sidebaropener">
              <img src="http://bulma.io/images/bulma-logo.png" alt="logo" />
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
            <a className="nav-item is-tab is-hidden-mobile">About</a>
          </div>
          <span className="nav-toggle" onClick={sidebarTrigger}>
            <span />
            <span />
            <span />
          </span>
          <div className="nav-right nav-menu">
            <NavLink className="nav-item is-tab" to="/home" activeClassName="is-active">
              Home
            </NavLink>
            <NavLink className="nav-item is-tab" to="/posts" activeClassName="is-active">
              Posts
            </NavLink>
            <NavLink className="nav-item is-tab" to="/about">About</NavLink>
            <a className="nav-item is-tab is-hidden-tablet">About</a>
            <a className="nav-item is-tab">
              <figure className="image is-16x16" style={{ marginRight: '8px' }}>
                <img src="http://bulma.io/images/jgthms.png" />
              </figure>
              Profile
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
