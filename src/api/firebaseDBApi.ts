import axios from "axios";
import { useCallback, useState } from "react";

import { musicsUrl } from "../../config";
import { MusicDatum } from "../lib/types";

export const firebasePutMusicData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (data: MusicDatum) => {
    setLoading(true);

    const url = `${musicsUrl}/${data.music_id}.json`;
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

export const firebaseGetSearchMusicData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<MusicDatum[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (user_id: string) => {
    setLoading(true);

    const url = `${musicsUrl}.json?orderBy="user_id"&equalTo="${user_id}"&print=pretty`;
    await axios
      .get(url)
      .then(async (res) => {
        const responseData: { [key: string]: MusicDatum } = await res.data;
        const ret: MusicDatum[] = [];
        for (const [, value] of Object.entries(responseData)) {
          ret.push(value);
        }

        setResponse(ret);
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

export const firebaseGetSearchMusicDatum = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<MusicDatum>();
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (music_id: string) => {
    setLoading(true);

    const url = `${musicsUrl}/${music_id}.json`;
    await axios
      .get(url)
      .then(async (res) => {
        setResponse(res.data);
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

export const firebaseDeleteMusicDatum = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);

  const deleteFn = useCallback(async (music_id: string) => {
    setLoading(true);

    const url = `${musicsUrl}/${music_id}.json`;
    await axios
      .delete(url)
      .then(async () => {
        setResponse("ok");
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, error, response, deleteFn };
};
