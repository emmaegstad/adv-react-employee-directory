import './Auth.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signUpUser, signInUser } from '../../services/users.js';

export default function Auth({ isSigningUp = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSigningUp) {
      const resp = await signUpUser(email, password);
      //   setUser({ email: resp.email, id: resp.id });
      history.push('/confirmation');
    } else {
      const resp = await signInUser(email, password);
      setUser({ email: resp.email, id: resp.id });
      history.replace('/profile');
    }
  };

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
          value={email}
          className="auth-input_email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password-input">
        Password:
        <input
          type="password"
          id="password-input"
          name="password-input"
          value={password}
          className="auth-input_password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
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
