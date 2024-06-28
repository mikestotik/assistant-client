import dayjs from 'dayjs';


interface AgentItemProps {
  title: string,
  desc?: string
  updated?: string | Date
}


export const AssistantItem = ({ title, desc, updated }: AgentItemProps) => {
  return (
    <div className="agent">
      <div className="agent-logo">
        <i className="icon icon-user"></i>
      </div>

      <div className="agent-info">
        <div className="agent-info-title">{ title }</div>
        <div className="agent-info-desc">{ desc ? desc : 'Updated: ' + dayjs(updated).format('HH:mm') }</div>
      </div>
    </div>
  );
};