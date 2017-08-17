import React, { Component } from 'react';

export default class Overlay extends Component {
  render() {
    const { reveal, closeFn } = this.props;
    let visibleClassName = '';
    reveal && 'out';

    return <div onClick={closeFn} className={`overlay ${reveal}`} id="overlay" />;
  }
}
