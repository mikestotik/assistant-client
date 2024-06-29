import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { AppPage } from '../shared/AppPage.tsx';
import { Team } from './Team.tsx';


export const Assistant = observer(() => {
  return (
    <AppPage sidebar={ <Team/> }>
      <Outlet/>
    </AppPage>
  );
});
