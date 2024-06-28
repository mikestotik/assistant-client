import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { AssistantTeam } from './AssistantTeam.tsx';


export const Assistant = observer(() => {

  return (
    <div className="assistant">
      <div className="assistant-team">
        <AssistantTeam/>
      </div>

      <div className="assistant-chat">
        <Outlet/>
      </div>
    </div>
  );
});