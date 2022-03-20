export interface Content {
  artist: string;
  song: string;
  songId: string;
}

export interface ContentsResponse {
  damResponce: Content[];
  joyResponce: Content[];
}
