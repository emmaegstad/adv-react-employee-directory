import { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { getProfile } from '../../services/profiles';

export default function Profile() {
  const { setProfile, profile, loading, setLoading } = useProfile();
  const history = useHistory();

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await getProfile();
      setProfile(res);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      history.push('/profile/create');
    }
  }, []);

  const handleClick = () => {
    history.push('/profile/edit');
  };

  if (loading) return <p>Loading...</p>;

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
