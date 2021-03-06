import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Switch from 'react-router-dom/Switch';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';

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

class HomeRoute extends Component {
  render() {
    const { closeSidebar, openSidebar } = this.props;
    const { theme } = this.props.allAppState;

    return (
      <div>

        <Helmet>
          <title>Home</title>
        </Helmet>

        <div className="columns bt-content">

          <div className="column is-one-quarter">
            <h2>{config('welcomeMessage')}</h2>

            <p>Hello</p>
            <h2>Welcome to the jungle</h2>

            <Feeds />

            <p>
              This starter kit contains all the build tooling and configuration you
              need to kick off your next universal React project, whilst containing a
              minimal project set up allowing you to make your own architecture
              decisions (Redux/Mobx etc).
            </p>
          </div>

          <Timeline />

          <div className="column is-one-third">
            <button
              onClick={() => {
                this.props.openSidebar();
              }}
            >
              open
            </button>
            <button
              onClick={() => {
                this.props.closeSidebar();
              }}
            >
              close
            </button>
            <label>{this.props.allAppState.theme.debugMessage}</label>
            <Status />
          </div>

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

// export default HomeRoute;
export default compose(connect(mapStateToProps, mapActionsToProps))(HomeRoute);

// Post.propTypes = {
//   post: PropTypes.shape({
//     title: string,
//     body: string,
//   }),
// };

// Post.defaultProps = {
//   post: {},
// };
