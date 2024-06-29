import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useMatch } from 'react-router-dom';
import { RoutePaths } from '../../const/routes.const.ts';
import { WebSocketEvent } from '../../enums/ws.enum.ts';
import { useStore } from '../../hooks/useStore.hook.ts';
import { useWebSocket } from '../../hooks/useWebSocket.hook.ts';
import { ChatAssistantMessageChunk, ChatAssistantMessageStart } from '../../models/chat/chat.interface.ts';
import { Loader } from '../shared/Loader.tsx';


export const Main = observer(() => {
  const {
    accountStore,
    assistantStore,
    authStore,
    chatStore
  }
    = useStore();

  const [ loading, setLoading ] = useState(true);

  const { subscribe, unsubscribe } = useWebSocket(authStore.getUserId()!);

  useEffect(() => {
    Promise.all([
      accountStore.load(),
      assistantStore.load()
    ])
      .then(() => setLoading(false));

    const onAssistantChatMessageStart = ({ assistantId, message }: ChatAssistantMessageStart) => {
      chatStore.addAssistantMessage(assistantId, message)
    };
    const onAssistantMessageChunk = ({ assistantId, event }: ChatAssistantMessageChunk) => {
      console.log(assistantId, event);
      chatStore.updateAssistantMessage(assistantId, event.run_id, event.data.chunk.kwargs.content)
    };
    subscribe(WebSocketEvent.AssistantChatMessageStart, onAssistantChatMessageStart);
    subscribe(WebSocketEvent.AssistantChatMessageChunk, onAssistantMessageChunk);

    return () => {
      unsubscribe(WebSocketEvent.AssistantChatMessageStart, onAssistantChatMessageStart);
      unsubscribe(WebSocketEvent.AssistantChatMessageChunk, onAssistantMessageChunk);
    };
  }, []);


  if (useMatch(RoutePaths.MAIN)) {
    return <Navigate to={ RoutePaths.ASSISTANT_CHAT }/>;
  }

  return (
    loading ? <Loader/> : <Outlet/>
  );
});