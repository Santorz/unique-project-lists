import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export type usersDataType = {
  mat_no: string;
  name: string;
  phone_number: string;
  Sex: string;
  project_topic: string;
  image_name: string;
};

export const useGetData = () => {
  // State Values
  const [isLoading, setIsLoading] = useState(true);
  const [usersData, setUsersData] = useState<usersDataType[]>([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchUsersData = useCallback(async () => {
    axios
      .get<usersDataType[]>('/data/users.json')
      .then((resp) => {
        setTimeout(() => {
          setIsError(false);
          setErrorMsg('');
          setIsLoading(false);
          setUsersData(resp.data);
        }, 7000);
      })
      .catch((err: AxiosError | any) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(err.msg);
      });
  }, []);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  //   Returns
  return {
    errorMsg,
    fetchUsersData,
    isError,
    isLoading,
    usersData,
  };
};
