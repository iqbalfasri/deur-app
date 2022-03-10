import axios from "axios";
import { useQuery } from "react-query";

import { API_V3_TICKER } from "../constants";
import { Ticker } from "../types";

const requestTicker = async () => {
  const { data }: { data: Ticker[] } = await axios.get(API_V3_TICKER);

  return data;
};

const useGetTicker = () => {
  return useQuery("getTicker", requestTicker, {
    refetchInterval: 2000,
  });
};

export default useGetTicker;
