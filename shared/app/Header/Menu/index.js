import React from 'react';
import Link from 'react-router-dom/Link';

function Menu() {
  return (
    <div className="clearfix mainheader">    
      <div className="float-left">
        <div className="site-name">
          REact-betot
        </div>
      </div>
      <div className="float-right">
        <ul style={{ padding: '13px 1rem' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
