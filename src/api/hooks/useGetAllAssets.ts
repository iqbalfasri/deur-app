import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { API_URI_ALL_ASSETS } from "../constants";
import { CryptoCurrencyAsset } from "../types";

const requestGetAllAssets = async () => {
  const { data } = await axios.get<AxiosResponse<CryptoCurrencyAsset[]>>(
    API_URI_ALL_ASSETS
  );

  return data?.data;
};

const useGetAllAssets = () => {
  return useQuery("getAllAssets", requestGetAllAssets, {
    // refetchInterval: 2000,
  });
};

export default useGetAllAssets;
