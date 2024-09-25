import { Permission } from '../../model/enum/permission';

export interface Auth {
  mode: string;
  id: number;
  password: string;
  permission: Permission;
}
