export interface Playlist {
  id: number;
  title: string;
  createdBy: number;
  tracks: number[];

  description?: string;
  type?: string;
  img?: string;
  showDelete?: boolean;
}
