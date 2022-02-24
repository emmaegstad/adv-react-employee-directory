import { useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default function Profile({ isCreating, isEditing }) {
  return (
    <div className="Profile">
      <span>In the Profile...</span>
      {isCreating && <ProfileForm isCreating />}
      {isEditing && <ProfileForm isEditing />}
    </div>
  );
}
