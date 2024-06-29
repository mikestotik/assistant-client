import { ChatMessage } from '../../../models/chat/chat.interface.ts';


interface ChatUserMessageProps {
  message: ChatMessage;
}


export const ChatUserMessage = ({ message }: ChatUserMessageProps) => {
  return (
    <>{ message.text }</>
  );
};