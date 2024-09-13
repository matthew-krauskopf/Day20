import { Permission } from '../../model/enum/permission';

export interface User {
  id: number;
  username: string;
  password: string;

  permission?: Permission;
  playlists?: number[];
  favoriteTracks: number[];
  deleted?: boolean;
  pic?: string;
}
