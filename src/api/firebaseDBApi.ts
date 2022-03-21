import axios from "axios";
import { useCallback, useState } from "react";
import { Content } from "../types";
import { musicsUrl } from "../../config";

export type contentsResponse = {
  damResponce: Content[];
  joyResponce: Content[];
};

export const firebasePutMusicData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async () => {
    setLoading(true);

    const url = `${musicsUrl}/uuid.json`;
    const data = {
      name: "タイトル",
      hiragana_name: "たいとる",
      max_range: "hiA",
      user_id: "massann",
      key: -4,
      modified: "timestamp",
      created: "timestamp",
    };

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
