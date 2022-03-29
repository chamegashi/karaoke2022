export interface Content {
  artist: string;
  song: string;
  songId: string;
  hiraganaSong: string;
}

export interface ContentsResponse {
  damResponce: Content[];
  joyResponce: Content[];
}

export interface MusicDatum {
  music_id: string;
  user_id: string;
  name: string;
  hiragarana_name: string;
  artist: string;
  max_range: string;
  key: number;
  max_score: number;
  modified: number;
  created: number;
}

export interface sendMusicData {
  user_id: string;
  name: string;
  hiragarana_name: string;
  artist: string;
  max_range: string;
  key: number;
  max_score: number;
  modified: number;
  created: number;
}

export type DamStirng = "Dx" | "DxG" | "Ai";

export interface HistoryData {
  title: string;
  hiraganaTitle: string;
  artist: string;
  key: string;
  score: string;
  created: string;
}
