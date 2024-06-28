import dayjs from 'dayjs';


interface AgentItemProps {
  title: string,
  desc?: string
  logo?: string
  updated?: string | Date
}


export const AssistantItem = ({ title, desc, logo, updated }: AgentItemProps) => {
  return (
    <div className="agent">
      <div className="agent-logo">
        <img src={ logo ?? '/assistant/logo_1.jpg' } alt="logo"/>
      </div>

      <div className="agent-info">
        <div className="agent-info-title">{ title }</div>
        <div className="agent-info-desc">{ desc ? desc : 'Updated: ' + dayjs(updated).format('HH:mm') }</div>
      </div>
    </div>
  );
};