import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from './../../../config';

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
            <Status />
          </div>

        </div>
      </div>
    );
  }
}

export default HomeRoute;
