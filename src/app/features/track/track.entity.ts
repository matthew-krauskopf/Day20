export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  length: number;

  deleted?: boolean;
  type?: string;
  img?: string;
  tracks?: number[];
}
