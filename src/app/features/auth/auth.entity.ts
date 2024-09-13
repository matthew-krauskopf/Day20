import { Permission } from '../../model/enum/permission';

export interface Auth {
  mode: string;
  userId: number;
  permission: Permission;
}
