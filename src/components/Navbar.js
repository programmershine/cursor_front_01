import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">회사 로고</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">회사소개</Link></li>
        <li><Link to="/board">게시판</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 