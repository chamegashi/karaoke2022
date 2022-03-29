import axios from "axios";
import { useCallback, useState } from "react";

import { herokuUrl } from "../../config";
import { DamStirng, HistoryData } from "../lib/types";

export const DamHistoryData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<HistoryData[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(
    async (version: DamStirng, page: number, damId: string) => {
      setLoading(true);

      const url = `${herokuUrl}/api/history?version=${version}&page=${page}&id=${damId}`;

      await axios
        .get(url)
        .then(async (res) => {
          const responseData = await res.data.data;
          setResponse(responseData);
        })
        .catch(({ err }) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    []
  );
  return { loading, error, response, getFn };
};
