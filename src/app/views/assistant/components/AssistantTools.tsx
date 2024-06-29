import { Button } from 'antd';


export const AssistantTools = () => {
  return (
    <div className="assistant-tools">
      <Button
        icon={ <i className="icon icon-list"/> }
        style={ { fontSize: '22px', opacity: 0.75 } }
        size="large"
        type="text"
      />
      <Button
        icon={ <i className="icon icon-settings"/> }
        style={ { fontSize: '22px', opacity: 0.75 } }
        size="large"
        type="text"
      />
    </div>
  );
};