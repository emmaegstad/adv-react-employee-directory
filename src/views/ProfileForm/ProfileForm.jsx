import './ProfileForm.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { createProfile, updateProfile } from '../../services/profiles';
import { useUser } from '../../context/UserContext';

export default function ProfileForm({ isCreating = false, isEditing = false }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');
  const { profile, setProfile } = useProfile();
  const { user } = useUser();
  const history = useHistory();

  useEffect(() => {
    setName(profile.name);
    setBirthday(profile.birthday);
    setBio(profile.bio);
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreating) {
      await createProfile({ name, email, bio, birthday });
      setProfile({ name, email: user.email, bio, birthday });
      history.push('/profile');
    } else if (isEditing) {
      await updateProfile({ name, email: user.email, bio, birthday });
      setProfile({ name, email: user.email, bio, birthday });
      history.replace('/profile');
    }
  };

  return (
    <form className="ProfileForm">
      {isEditing && <span>Editing!</span>}
      {isCreating && <span>Creating!</span>}
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          readOnly
        />
      </label>
      <label htmlFor="birthday">
        Birthday:
        <input
          type="date"
          name="birthday"
          id="birthday"
          value={birthday}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
      </label>
      <label htmlFor="bio">
        Bio:
        <textarea
          name="bio"
          id="bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
