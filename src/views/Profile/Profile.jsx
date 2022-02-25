import { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { getProfile } from '../../services/profiles';

export default function Profile() {
  const { setProfile, profile, setLoading } = useProfile();
  const history = useHistory();

  useEffect(async () => {
    try {
      const res = await getProfile();
      setProfile(res);
      setLoading(false);
    } catch (err) {
      history.push('/profile/create');
    }
  });

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
