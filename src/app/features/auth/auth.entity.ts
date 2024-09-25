import { Permission } from '../../model/enum/permission';

export interface Auth {
  mode: string;
  id: number;
  username: string;
  password: string;
  permission: Permission;
}
