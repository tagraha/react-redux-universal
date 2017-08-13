import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from './../../../config';

class HomeRoute extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <div className="column column-60">
          <h2>{config('welcomeMessage')}</h2>

          <p>
            This starter kit contains all the build tooling and configuration you
            need to kick off your next universal React project, whilst containing a
            minimal project set up allowing you to make your own architecture
            decisions (Redux/Mobx etc).
          </p>
        </div>
      </div>
    );
  }
}

export default HomeRoute;
