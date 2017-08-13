import React from 'react';
import Link from 'react-router-dom/Link';

function Menu() {
  return (
    // <div className="clearfix mainheader">
    //   <div className="float-left">
    //     <div className="site-name">
    //       REact-betot
    //     </div>
    //   </div>
    //   <div className="float-right">
    //     <ul style={{ padding: '13px 1rem' }}>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/posts">Posts</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //     </ul>
    //   </div>
    // </div>

    (
      <nav className="nav has-shadow is-fixed">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" id="sidebaropener">
              <img src="http://bulma.io/images/bulma-logo.png" alt="logo" />
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
            <a className="nav-item is-tab is-hidden-mobile">About</a>
          </div>
          <span className="nav-toggle">
            <span />
            <span />
            <span />
          </span>
          <div className="nav-right nav-menu">
            <Link className="nav-item is-tab" to="/">Home</Link>
            <Link className="nav-item is-tab" to="/posts">Posts</Link>
            <Link className="nav-item is-tab" to="/about">About</Link>
            <a className="nav-item is-tab is-hidden-tablet">About</a>
            <a className="nav-item is-tab">
              <figure className="image is-16x16" style={{ marginRight: '8px' }}>
                <img src="http://bulma.io/images/jgthms.png" />
              </figure>
              Profile
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    )
  );
}

export default Menu;
