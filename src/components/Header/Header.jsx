import './Header.css';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { user } = useUser();
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  };

  const handleLogout = async () => {
    await signOutUser();
  };

  return (
    <div className="Header">
      <h1 className="header-title">Acme Employee Directory</h1>
      <section className="header-controls">
        <span>
          {user.email ? `Signed-in as ${user.email}` : 'Not Signed In'}
        </span>
        {!user.email && <button onClick={handleClick}>Log In</button>}
        {user.email && <button onClick={handleLogout}>Log Out</button>}
      </section>
    </div>
  );
}
