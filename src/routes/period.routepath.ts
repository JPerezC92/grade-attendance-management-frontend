import { AppRoute } from './app.routepath';
import { RouteList } from './base.routepath';

interface PeriodRoute extends RouteList {
  ROOT: string;
}

const courseRoot = `${AppRoute.ROOT}/period`;

export const PeriodRoute: PeriodRoute = {
  ROOT: courseRoot,
};
