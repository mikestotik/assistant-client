import { observer } from 'mobx-react-lite';
import { Navigate, useParams } from 'react-router-dom';
import { RoutePaths } from '../../const/routes.const.ts';
import { useStore } from '../../hooks/useStore.hook.ts';
import { Chat } from '../chat/Chat.tsx';
import { AssistantLogo } from './components/AssistantLogo.tsx';
import { AssistantTools } from './components/AssistantTools.tsx';


export const AssistantPayload = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { assistantStore } = useStore();

  const assistant = assistantStore.selectById(id);

  if (!assistant) {
    return <Navigate to={ RoutePaths.ASSISTANT }/>;
  }

  return (
    <div className="assistant-payload">
      <div className="assistant-payload-head">
        <AssistantLogo
          title={ assistant.title }
          updated={ assistant.updated }
        />
        <AssistantTools/>
      </div>

      <div className="assistant-payload-body">
        <Chat assistant={ assistant }/>
      </div>
    </div>
  );
});