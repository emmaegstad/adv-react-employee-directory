import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile/edit');
  };

  return (
    <div className="Profile">
      <h2>{profile.name}'s Profile</h2>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
      <button onClick={handleClick}>Edit</button>
    </div>
  );
}
