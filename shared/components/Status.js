import React, { Component } from 'react';

export default class Status extends Component {
  render() {
    return (
      <div className="card margbot">
        <div className="card-content">
          <p className="title">
            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">
            Jeff Atwood
          </p>

          <div className="ui feed top-border">
            <div className="event">
              <div className="label">
                <img src="./img/avatar/small/elliot.jpg" />
              </div>
              <div className="content">
                <div className="summary">
                  <a className="user">
                    Elliot Fu
                  </a> added you as a friend
                  <div className="date">
                    1 Hour Ago
                  </div>
                </div>
                <div className="meta">
                  <a className="like">4 Likes</a>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="label">
                <img src="./img/avatar/small/helen.jpg" />
              </div>
              <div className="content">
                <div className="summary">
                  <a>Helen Troy</a> added <a>2 new illustrations</a>
                  <div className="date">
                    4 days ago
                  </div>
                </div>
                <div className="extra images">
                  <a><img src="./img/wireframe/image.png" /></a>
                  <a><img src="./img/wireframe/image.png" /></a>
                </div>
                <div className="meta">
                  <a className="like">1 Like</a>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="label">
                <img src="./img/avatar/small/jenny.jpg" />
              </div>
              <div className="content">
                <div className="summary">
                  <a className="user">
                    Jenny Hess:{' '}
                  </a>
                  <span>
                    jiahahaha, mantap bray @nino. droplet digitalocean aja tunduk sama lau bang
                  </span>
                  <div className="date">
                    2 Days Ago
                  </div>
                </div>
                <div className="meta">
                  <a className="like">8 Likes</a>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="label">
                <img src="./img/avatar/small/joe.jpg" />
              </div>
              <div className="content">
                <div className="summary">
                  <a>Joe Henderson</a> posted on his page
                  <div className="date">
                    3 days ago
                  </div>
                </div>
                <div className="extra text">
                  Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
                </div>
                <div className="meta">
                  <a className="like">5 Likes</a>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="label">
                <img src="./img/avatar/small/justen.jpg" />
              </div>
              <div className="content">
                <div className="summary">
                  <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                  <div className="date">
                    4 days ago
                  </div>
                </div>
                <div className="extra images">
                  <a><img src="./img/wireframe/image.png" /></a>
                  <a><img src="./img/wireframe/image.png" /></a>
                </div>
                <div className="meta">
                  <a className="like">41 Likes</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on
              {' '}
              <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}
