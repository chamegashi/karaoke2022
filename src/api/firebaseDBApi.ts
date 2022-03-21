import axios from "axios";
import { useCallback, useState } from "react";
import { Content, MusicData } from "../types";
import { musicsUrl } from "../../config";

export const firebasePutMusicData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (data: MusicData) => {
    setLoading(true);

    const url = `${musicsUrl}/uuid.json`;
    await axios
      .put(url, data)
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
