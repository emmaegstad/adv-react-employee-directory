import './Auth.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Auth({ isSigningUp = false }) {
  return (
    <form className="Auth">
      <h2 className="auth-title">
        {isSigningUp
          ? 'Hello! Please create an account.'
          : 'Welcome back! Please log in.'}
      </h2>
      <label htmlFor="email-input">
        E-mail:
        <input
          type="email"
          id="email-input"
          name="email-input"
          className="auth-input_email"
        />
      </label>
      <label htmlFor="password-input">
        Password:
        <input
          type="password"
          id="password-input"
          name="password-input"
          className="auth-input_password"
        />
      </label>
      <button type="submit">Submit</button>
      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/register">Register Here</Link>
        </p>
      )}
    </form>
  );
}
