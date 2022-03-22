import { useEffect, useState } from "react";
import { MusicDatum } from "../types";
import { firebaseSearchMusicData } from "../api/firebaseDBApi";

export const musicDataState = (user_id: string) => {
  const [allMusicData, setAllMusicData] = useState<MusicDatum[]>([]);
  const [musicData, setMusicData] = useState<MusicDatum[]>([]);
  const { getFn, response, error, loading } = firebaseSearchMusicData();

  useEffect(() => {
    getFn(user_id);
  }, []);

  useEffect(() => {
    if (!response) {
      return;
    }
    setAllMusicData(response);
    setMusicData(response);

    console.log(response);
  }, [response]);

  useEffect(() => {
    if (!error) {
      return;
    }
    console.log(error);
  }, [error]);

  const updateMusicData = () => {
    getFn(user_id);
  };

  const musicFilter = (keyword: string) => {
    const newMusics: MusicDatum[] = allMusicData.filter((music) => {
      return music.name.includes(keyword) || music.artist.includes(keyword);
    });
    setMusicData(newMusics);
  };

  return { musicData, loading, updateMusicData, musicFilter };
};