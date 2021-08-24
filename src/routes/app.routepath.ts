import { basePath, RouteList } from './base.routepath';

interface App extends RouteList {
  ROOT: string;
  RECORD: (recordId: string) => string;
}
const appRoot = `${basePath}/app`;

export const AppRoute: App = {
  ROOT: appRoot,
  RECORD: (recordId) => `${appRoot}/record/${recordId}`,
};
