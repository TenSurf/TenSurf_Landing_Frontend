import { createContext, useContext } from 'react';
import useGetUserProfileData from '../hooks/useGetUserProfileData';

export const UserProfileDataContext = createContext<{
  isGetProfileDataLoading: boolean;
  userProfileData: any;
} | null>(null);

const UserProfileDataContextProvider = (props: any) => {
  const { isGetProfileDataLoading, userProfileData } = useGetUserProfileData();

  const valuesForProvider = {
    isGetProfileDataLoading,
    userProfileData
  };

  return <UserProfileDataContext.Provider value={valuesForProvider}>{props.children}</UserProfileDataContext.Provider>;
};

export default UserProfileDataContextProvider;

export const useGetProfileDataContext = () => {
  const context = useContext(UserProfileDataContext);

  if (!context) throw new Error('useGetProfileDataContext hook is not inside of CheckAuthenticationContext');

  return context;
};
