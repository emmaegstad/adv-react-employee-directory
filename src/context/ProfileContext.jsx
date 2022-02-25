import { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from '../context/UserContext';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { user } = useUser();
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
        setLoading(false);
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const value = { setLoading, profile, setProfile };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a ProfileProvider');
  }

  return context;
};

export { ProfileContext, ProfileProvider, useProfile };
