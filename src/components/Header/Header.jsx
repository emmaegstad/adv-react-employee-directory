import './Header.css';
import React from 'react';
import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const { user } = useUser();
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  };

  return (
    <div className="Header">
      <h1 className="header-title">Acme Employee Directory</h1>
      <section className="header-controls">
        <span>
          {user.email ? `Signed-in as ${user.email}` : 'Not Signed In'}
        </span>
        <button onClick={handleClick}>Log In</button>
      </section>
    </div>
  );
}
