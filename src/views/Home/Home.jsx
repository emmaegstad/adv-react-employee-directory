import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <h2 className="home-title">
        Welcome to the Acme Inc. Employee Directory!
      </h2>
      <p className="home-text">
        As an employee of Acme Inc., you're required to create a profile on our
        intranet in order to gain access to... things.
      </p>
      <p className="home-text">
        Create an account, then log in and fill out the requested details.
      </p>
      <p className="home-text">Thank you for your participation.</p>
      <p className="home-text">
        <Link to="/register">Create Account</Link> or{' '}
        <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}
