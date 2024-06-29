import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { AppPage } from '../shared/AppPage.tsx';
import { AssistantTeam } from './components/AssistantTeam.tsx';


export const Assistant = observer(() => {
  return (
    <AppPage sidebar={ <AssistantTeam/> }>
      <Outlet/>
    </AppPage>
  );
});
