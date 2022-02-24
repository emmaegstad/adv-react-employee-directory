import './ProfileForm.css';
import React from 'react';

export default function ProfileForm({ isCreating, isEditing }) {
  return (
    <div className="ProfileForm">
      {isCreating && <span>And in ProfileForm (creating)</span>}
      {isEditing && <span>And in ProfileForm (editing)</span>}
    </div>
  );
}
