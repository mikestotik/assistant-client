import { ReactNode } from 'react';
import { AppLogo } from './AppLogo.tsx';


interface AppPageProps {
  children?: ReactNode;
  sidebar?: ReactNode;
}


export const AppPage = ({ children, sidebar }: AppPageProps) => {
  return (
    <div className="app-page">
      <div className="app-page-sidebar">
        <div className="app-page-sidebar-logo">
          <AppLogo/>
        </div>

        <div className="app-page-sidebar-content">
          { sidebar }
        </div>
      </div>

      <div className="app-page-main">
        { children }
      </div>
    </div>
  );
};