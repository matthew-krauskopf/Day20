import { Permission } from '../../model/enum/permission';

export interface User {
  id: number;
  username: string;

  permission?: Permission;
  playlists?: number[];
  favoriteTracks: number[];
}
