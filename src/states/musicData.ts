import { useEffect, useState } from "react";

import { firebaseGetSearchMusicData } from "../api/firebaseDBApi";
import { MusicDatum } from "../lib/types";

export const musicDataState = (user_id: string) => {
  const [allMusicData, setAllMusicData] = useState<MusicDatum[]>([]);
  const [musicData, setMusicData] = useState<MusicDatum[]>([]);
  const { getFn, response, error, loading } = firebaseGetSearchMusicData();

  useEffect(() => {
    getFn(user_id);
  }, []);

  useEffect(() => {
    if (!response) {
      return;
    }
    setAllMusicData(response);
    setMusicData(response);
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

  const musicFilter = (keyword: string, maxKey: string) => {
    let newMusics: MusicDatum[];
    if (keyword && maxKey) {
      newMusics = allMusicData.filter((music) => {
        return (
          (music.name.includes(keyword) ||
            music.artist.includes(keyword) ||
            music.hiragarana_name.includes(keyword)) &&
          music.max_range === maxKey
        );
      });
      setMusicData(newMusics);
    } else if (maxKey) {
      newMusics = allMusicData.filter((music) => {
        music.max_range === maxKey;
      });
      setMusicData(newMusics);
    } else {
      newMusics = allMusicData.filter((music) => {
        return (
          music.name.includes(keyword) ||
          music.artist.includes(keyword) ||
          music.hiragarana_name.includes(keyword)
        );
      });
      setMusicData(newMusics);
    }
  };

  return { musicData, loading, updateMusicData, musicFilter };
};
