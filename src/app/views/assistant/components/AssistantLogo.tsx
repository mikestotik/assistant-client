import dayjs from 'dayjs';


interface AssistantLogoProps {
  title: string,
  updated: string | Date
}


export const AssistantLogo = ({ title, updated }: AssistantLogoProps) => {
  return (
    <div className="assistant-logo">
      <div className="assistant-logo-info">
        <div className="assistant-logo-info-title">{ title }</div>
        <div className="assistant-logo-info-desc">{ dayjs(updated).format('DD.MM HH:mm') }</div>
      </div>
    </div>
  );
};