import './Login.css';
import React from 'react';

export default function Login() {
  return (
    <form className="Login">
      <h2 className="login-title">Please log in!</h2>
      <label htmlFor="email-input">
        E-mail:
        <input
          type="email"
          id="email-input"
          name="email-input"
          className="login-input_email"
        />
      </label>
      <label htmlFor="password-input">
        Password:
        <input
          type="password"
          id="password-input"
          name="password-input"
          className="login-input_password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
