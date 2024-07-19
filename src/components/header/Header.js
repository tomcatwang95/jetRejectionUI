import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>JetRejection.com</h1>
      <div className="header-right">
        <input type="text" placeholder="Search..." />
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;