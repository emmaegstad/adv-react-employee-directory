import { useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';

const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchProfile();
  }, []);

  return { loading, setLoading, profile, setProfile };
};

export { useProfile };
