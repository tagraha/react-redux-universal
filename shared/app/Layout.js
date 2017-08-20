import React, { Component } from 'react';
// import Switch from 'react-router-dom/Switch';
// import Link from 'react-router-dom/Link';
// import Route from 'react-router-dom/Route';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';

import config from './../../config';
import * as ThemeAction from './../actions/appState';
import * as FromState from './../reducers';

/* components */
import Header from './Header';
import Feeds from './../components/Feeds';
import Timeline from './../components/Timeline';
import Status from './../components/Status';
import Overlay from './../components/Overlay';
import Sidebar from './../components/Sidebar';

class Layout extends Component {
  render() {
    const { closeSidebar, openSidebar } = this.props;
    const { theme } = this.props.allAppState;

    return (
      <div>
        {theme.sidebarIsOpen && <Overlay reveal={theme.sidebarIsOpen} closeFn={closeSidebar} />}

        <Header sidebarTrigger={this.props.openSidebar} />

        {theme.sidebarIsOpen && <Sidebar />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allAppState: FromState.getAllAppState(state),
    sidebarState: FromState.getSidebarState(state),
  };
}

const mapActionsToProps = {
  openSidebar: ThemeAction.openSidebar,
  closeSidebar: ThemeAction.closeSidebar,
};

export default compose(connect(mapStateToProps, mapActionsToProps))(Layout);
