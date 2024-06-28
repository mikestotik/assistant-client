import cn from 'classnames';
import dayjs from 'dayjs';


interface AgentItemProps {
  title: string,
  desc?: string,
  logo?: string,
  updated?: string | Date,
  active?: boolean
}


export const AssistantItem = ({ title, desc, logo, updated, active }: AgentItemProps) => {
  return (
    <div className={ cn('agent', { active }) }>
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