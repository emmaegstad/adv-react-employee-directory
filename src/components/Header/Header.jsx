import './Header.css';
import React from 'react';

export default function Header() {
  return (
    <div className="Header">
      <h1 className="header-title">Acme Employee Directory</h1>
      {/* conditionally render 'not signed in' or 'signed in as...' */}
      <section className="header-controls">
        <span>Not Signed In</span>
        <button>Log In</button>
      </section>
    </div>
  );
}
