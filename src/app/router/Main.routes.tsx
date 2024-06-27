import React from 'react';
import { RouteObject } from 'react-router';
import { RoutePaths } from '../const/routes.const.ts';
import { Assistant } from '../views/assistant/Assistant.tsx';
import { Main } from '../views/main/Main.tsx';


export const MainRoutes: RouteObject = {
  path: RoutePaths.MAIN,
  element: <Main/>,
  children: [
    {
      path: RoutePaths.ASSISTANT,
      element: <Assistant/>
    }
  ]
};