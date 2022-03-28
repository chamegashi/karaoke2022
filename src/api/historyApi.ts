import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useState } from "react";

import { DamStirng } from "../lib/types";

export const DamHistoryData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (dam: DamStirng) => {
    setLoading(true);

    const url = dam;

    const config: AxiosRequestConfig = {
      responseType: "document",
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    await axios
      .get(url, config)
      .then(async (res) => {
        const responseData = await res.data;
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(responseData, "text/xml");
        console.log(xmlData);
        setResponse(responseData);
      })
      .catch(({ response }) => {
        console.log(response);
        setError(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, error, response, getFn };
};
