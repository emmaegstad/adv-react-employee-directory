import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile
      ? {
          name: currentProfile.name,
          email: currentProfile.email,
          bio: currentProfile.bio,
          birthday: currentProfile.birthday,
        }
      : {}
  );

  const value = { profile, setProfile };

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
