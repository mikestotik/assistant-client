import { RouteObject } from 'react-router';
import { RoutePaths } from '../const/routes.const.ts';
import { Main } from '../views/main/Main.tsx';


export const MainRoutes: RouteObject = {
  path: RoutePaths.MAIN,
  element: <Main/>
};