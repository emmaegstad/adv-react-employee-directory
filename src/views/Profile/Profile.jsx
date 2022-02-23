import React from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import CreateProfile from '../../components/CreateProfile/CreateProfile';

export default function Profile() {
  return (
    <div className="Profile">
      <EditProfile />
      <CreateProfile />
    </div>
  );
}
