import { ChatMessage } from '../../../models/chat/chat.interface.ts';


interface ChatAssistantMessageProps {
  message: ChatMessage;
}


export const ChatAssistantMessage = ({ message }: ChatAssistantMessageProps) => {
  return (
    <>{ message.text }</>
  );
};