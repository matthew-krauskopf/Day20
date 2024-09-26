export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  length: number;

  type?: string;
  img?: string;
  tracks?: number[];
}
