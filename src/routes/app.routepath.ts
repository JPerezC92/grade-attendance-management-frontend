import { basePath, RouteList } from './base.routepath';

interface App extends RouteList {
  ROOT: string;
}
const appRoot = `${basePath}/app`;

export const AppRoute: App = {
  ROOT: appRoot,
};
