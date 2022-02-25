import { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useProfile } from '../../hooks/useProfile';
import { getProfile } from '../../services/profiles';

export default function Profile() {
  const { setProfile, profile, loading, setLoading } = useProfile();
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile/edit');
  };

  if (loading) return <p>Loading...</p>;
  if (!loading && !profile.name) return <Redirect to={'/profile/create'} />;

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
