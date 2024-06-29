import React from 'react';
import { RouteObject } from 'react-router';
import { RoutePaths } from '../const/routes.const.ts';
import { Assistant } from '../views/assistant/Assistant.tsx';
import { AssistantPayload } from '../views/assistant/AssistantPayload.tsx';
import { Main } from '../views/main/Main.tsx';


export const MainRoutes: RouteObject = {
  path: RoutePaths.MAIN,
  element: <Main/>,
  children: [
    {
      path: RoutePaths.ASSISTANT,
      element: <Assistant/>,
      children: [
        {
          path: RoutePaths.ASSISTANT_CHAT,
          element: <AssistantPayload/>
        }
      ]
    }
  ]
};