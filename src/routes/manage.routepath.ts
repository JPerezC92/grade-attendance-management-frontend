import { AppRoute } from './app.routepath';
import { RouteList } from './base.routepath';

interface ManageRoute extends RouteList {
  ROOT: string;
}

const courseRoot = `${AppRoute.ROOT}/manage`;

export const ManageRoute: ManageRoute = {
  ROOT: courseRoot,
};
