import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';

import config from './../../../config';
import * as ThemeAction from './../../actions/appState';
import * as FromState from './../../reducers';

/* components */
import Feeds from './../../components/Feeds';
import Timeline from './../../components/Timeline';
import Status from './../../components/Status';

class HomeRoute extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <div className="columns">

          <div className="column is-one-quarter">
            <h2>{config('welcomeMessage')}</h2>

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
// export default HomeRoute;
