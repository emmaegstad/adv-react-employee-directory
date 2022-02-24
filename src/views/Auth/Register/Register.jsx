import './Register.css';
import React from 'react';

export default function Register() {
  return (
    <form className="Register">
      <h2 className="register-title">Please register your account!</h2>
      <label htmlFor="email-input">
        E-mail:
        <input
          type="email"
          id="email-input"
          name="email-input"
          className="register-input_email"
        />
      </label>
      <label htmlFor="password-input">
        Password:
        <input
          type="password"
          id="password-input"
          name="password-input"
          className="register-input_password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
