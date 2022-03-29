import axios from "axios";
import { useCallback, useState } from "react";

import { herokuUrl } from "../../config";
import { Content } from "../lib/types";

const hostname = herokuUrl;

export type contentsResponse = {
  damResponce: Content[];
  joyResponce: Content[];
};

export const GetSearchResultData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<contentsResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (keyword: string) => {
    setLoading(true);

    const url = `${hostname}/api/search?keyword=` + keyword;

    await axios
      .get<contentsResponse>(url)
      .then(async (res) => {
        const responseData = await res.data;
        setResponse(responseData);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, error, response, getFn };
};
