import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useMatch } from 'react-router-dom';
import { RoutePaths } from '../../const/routes.const.ts';
import { WebSocketEvent } from '../../enums/ws.enum.ts';
import { useStore } from '../../hooks/useStore.hook.ts';
import { useWebSocket } from '../../hooks/useWebSocket.hook.ts';
import { ChatAssistantMessage } from '../../models/assistant/assistant.interface.ts';
import { Loader } from '../shared/Loader.tsx';


export const Main = observer(() => {
  const { accountStore, assistantStore, authStore } = useStore();
  const [ loading, setLoading ] = useState(true);

  const { subscribe, unsubscribe } = useWebSocket(authStore.getUserId()!);

  useEffect(() => {
    Promise.all([
      accountStore.load(),
      assistantStore.load()
    ])
      .then(() => setLoading(false));

    const onAssistantChatEvent = ({ assistantId, event }: ChatAssistantMessage) => {
      console.log(assistantId, event);
    };
    subscribe(WebSocketEvent.AssistantChatEvent, onAssistantChatEvent);

    return () => {
      unsubscribe(WebSocketEvent.AssistantChatEvent, onAssistantChatEvent);
    };
  }, []);


  if (useMatch(RoutePaths.MAIN)) {
    return <Navigate to={ RoutePaths.ASSISTANT_CHAT }/>;
  }

  return (
    loading ? <Loader/> : <Outlet/>
  );
});