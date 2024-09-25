export interface Track {
  id: number;
  title: string;
  artist: string;
  year: number;
  length: number;

  type?: string;
  img?: string;
}
