import { createContext, type Dispatch, type SetStateAction, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../helpers/http-request';
import { BackendUrls } from '../helpers/backend-urls';
import { parseCookie } from '../helpers/auth';

export const CheckAuthenticationContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  isAuthenticatedLoading: boolean;
  setIsAuthenticatedLoading: Dispatch<SetStateAction<boolean>>;
  setUserProfileData: Dispatch<SetStateAction<any>>;
  CheckAuthenticationHandler: () => void;
  userProfileData: any;
} | null>(null);

const CheckAuthenticationContextProvider = (props: any) => {
  const [isAuthenticatedLoading, setIsAuthenticatedLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userProfileData, setUserProfileData] = useState<any>();

  const CheckAuthenticationHandler = () => {
    setIsAuthenticatedLoading(true);
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    const token = parseCookie(document.cookie)?.token;
    headers.Authorization = 'Token ' + token;

    axios({
      method: 'get',
      headers,
      url: backendUrl + BackendUrls.profile
    })
      .then(response => {
        if (response?.data) {
          setUserProfileData(response.data);
          setIsAuthenticated(true);
        }
      })
      .catch(e => {
        // console.log(e?.response?.data?.detail);
      })
      .finally(() => setIsAuthenticatedLoading(false));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      CheckAuthenticationHandler();
    }
  }, []);

  const valuesForProvider = {
    isAuthenticatedLoading,
    setIsAuthenticatedLoading,
    setIsAuthenticated,
    isAuthenticated,
    CheckAuthenticationHandler,
    userProfileData,
    setUserProfileData
  };

  return (
    <CheckAuthenticationContext.Provider value={valuesForProvider}>
      {props.children}
    </CheckAuthenticationContext.Provider>
  );
};

export default CheckAuthenticationContextProvider;
export const useCheckAuthenticationContext = () => {
  const context = useContext(CheckAuthenticationContext);

  // if (!context) throw new Error('useSearchContext hook is not inside of CheckAuthenticationContext');

  return context;
};
