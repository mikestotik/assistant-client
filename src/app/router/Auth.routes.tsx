
import { RouteObject } from 'react-router';
import { RoutePaths } from '../const/routes.const.ts';
import { Auth } from '../views/auth/Auth.tsx';
import { AuthSignIn } from '../views/auth/pages/AuthSignIn.tsx';
import { AuthSignUp } from '../views/auth/pages/AuthSignUp.tsx';


export const AuthRoutes: RouteObject = {
  path: RoutePaths.AUTH,
  element: <Auth/>,
  children: [
    {
      path: RoutePaths.AUTH_SIGN_IN,
      element: <AuthSignIn/>
    },
    {
      path: RoutePaths.AUTH_SIGN_UP,
      element: <AuthSignUp/>
    }
  ]
};