import './Home.css';
import React from 'react';
import Header from '../../components/Header/Header';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Profile from '../Profile/Profile';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Login />
      <Register />
      <Profile />
    </div>
  );
}
