import { basePath, RouteList } from './base.routepath';

interface Auth extends RouteList {
  ROOT: string;
  LOGIN: string;
  REGISTER: string;
  LOGOUT: string;
}
const authRoot = `${basePath}/auth`;

export const AuthRoute: Auth = {
  ROOT: authRoot,
  LOGIN: `${authRoot}/login`,
  REGISTER: `${authRoot}/register`,
  LOGOUT: `${authRoot}/logout`,
};
