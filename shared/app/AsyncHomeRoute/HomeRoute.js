import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from './../../../config';

class HomeRoute extends Component {
  render() {
    return (
      <div id="homepage" className="row">
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

        <div className="column column-40">
          <h2>40% grid</h2>
          <p>
            This starter kit contains all the build tooling and configuration you need to kick off your next universal React project, whilst containing a minimal project set up allowing you to make your own architecture decisions (Redux/Mobx etc).
          </p>

          <div className="row">
            <div className="column column-50">
              <p>
                This starter kit contains all the build tooling and configuration you need to kick off your next universal React project, whilst containing a minimal project set
                {' '}
              </p>
            </div>

            <div className="column column-50">
              <p>
                This starter kit contains all the build tooling and configuration you need to kick off your next universal React project, whilst containing a minimal project set
                {' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeRoute;
