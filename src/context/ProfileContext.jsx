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
  }, [user]);

  const value = { loading, setLoading, profile, setProfile };

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
