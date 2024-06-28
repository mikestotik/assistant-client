import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { Navigate, useParams } from 'react-router-dom';
import { RoutePaths } from '../../const/routes.const.ts';
import { useStore } from '../../hooks/useStore.hook.ts';
import { AssistantLogo } from './components/AssistantLogo.tsx';


export const AssistantChat = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { assistantStore } = useStore();

  const assistant = assistantStore.selectById(id);

  if (!assistant) {
    return <Navigate to={ RoutePaths.ASSISTANT }/>;
  }

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-head-assistant">
          <AssistantLogo title={ assistant.title } updated={ assistant.updated }/>
        </div>

        <div className="chat-head-tools">
          <Button
            icon={ <i className="icon icon-settings"/> }
            size="large"
            style={ { fontSize: '20px', opacity: 0.75 } }
          />
        </div>
      </div>

      <div className="chat-body">
        ...
      </div>

      <div className="chat-controls">
        <div className="chat-controls-input">
          <Input
            size="large"
          />
        </div>
        <div className="chat-controls-items">
          <div className="chat-controls-items-item">

          </div>
          <div className="chat-controls-items-item">
            <Button
              icon={ <i className="icon icon-microphone"/> }
              size="large"
              style={ { fontSize: '20px', opacity: 0.75 } }
            />
          </div>
        </div>
      </div>
    </div>
  );
});