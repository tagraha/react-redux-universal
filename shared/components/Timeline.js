import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <span className="column">
        <div className="notification is-primary">
          <button className="delete" />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>

        <p>lorem ipsum dolor sid amet</p>

        <div className="card margbot">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="img/wireframe/1280x960.png" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="img/wireframe/1280x960.png" alt="Image" />
              </figure>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item">Save</a>
            <a className="card-footer-item">Edit</a>
            <a className="card-footer-item">Delete</a>
          </footer>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="img/wireframe/1280x960.png" alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="img/wireframe/1280x960.png" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
