import dayjs from 'dayjs';


interface AssistantLogoProps {
  title: string,
  updated: string | Date
}


export const AssistantLogo = ({ title, updated }: AssistantLogoProps) => {
  const date = dayjs(updated).format('DD.MM HH:mm');

  return (
    <div className="assistant-logo">
      <div className="assistant-logo-title">{ title }</div>
      <div className="assistant-logo-desc">{ date }</div>
    </div>
  );
};