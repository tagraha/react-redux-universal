import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';

import { compose } from 'redux';
import { connect } from 'react-redux';

import config from './../../../config';
import * as ThemeAction from './../../actions/appState';
import * as FromState from './../../reducers';

/* components */
import Header from './../Header';
import Feeds from './../../components/Feeds';
import Timeline from './../../components/Timeline';
import Status from './../../components/Status';
import Overlay from './../../components/Overlay';
import Sidebar from './../../components/Sidebar';

import AsyncHomeRoute from './../AsyncHomeRoute';
import AsyncPostsRoute from './../AsyncPostsRoute';
import AsyncAboutRoute from './../AsyncAboutRoute';
class AppContainer extends Component {
  render() {
    const { closeSidebar, openSidebar } = this.props;
    const { theme } = this.props.allAppState;

    <Redirect to={'/home'} push />;

    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>

        {theme.sidebarIsOpen && <Overlay reveal={theme.sidebarIsOpen} closeFn={closeSidebar} />}

        <Header sidebarTrigger={this.props.openSidebar} />

        {theme.sidebarIsOpen && <Sidebar />}

        <div className="bt-wrapper">
          <Route path={'/home'} component={AsyncHomeRoute} />
          <Route path={'/posts'} component={AsyncPostsRoute} />
          <Route path={'/about'} component={AsyncAboutRoute} />
        </div>
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

export default compose(connect(mapStateToProps, mapActionsToProps))(AppContainer);
