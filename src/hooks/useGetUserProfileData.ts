import { useEffect, useState } from 'react';
import { parseCookie } from '../helpers/auth';
import axios from 'axios';
import { backendUrl } from '../helpers/http-request';
import { BackendUrls } from '../helpers/backend-urls';

const useGetUserProfileData = () => {
  const [isGetProfileDataLoading, setIsGetProfileDataLoading] = useState<boolean>(true);
  const [userProfileData, setUserProfileData] = useState<any>();

  const getProfileDataHandler = () => {
    setIsGetProfileDataLoading(true);
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
        }
      })
      .catch(e => {
        // console.log(e?.response?.data?.detail);
      })
      .finally(() => setIsGetProfileDataLoading(false));
  };

  useEffect(() => {
    getProfileDataHandler();
  }, []);

  return { isGetProfileDataLoading, userProfileData };
};

export default useGetUserProfileData;
