import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();

  console.log(profile);

  return (
    <div className="Profile">
      <h2>{profile.name}'s Profile</h2>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}
