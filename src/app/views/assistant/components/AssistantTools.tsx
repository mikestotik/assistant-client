import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { Assistant } from '../../../models/assistant/assistant.interface.ts';
import { AssistantDetails } from './AssistantDetails.tsx';


interface AssistantToolsProps {
  assistant: Assistant;
}


export const AssistantTools = ({ assistant }: AssistantToolsProps) => {
  const [ openSettings, setOpenSettings ] = useState(false);

  return (
    <div className="assistant-tools">
      <Button
        icon={ <i className="icon icon-list"/> }
        style={ { fontSize: '22px', opacity: 0.75, display: 'none' } }
        size="large"
        type="text"
      />

      <Button
        icon={ <i className="icon icon-settings"/> }
        style={ { fontSize: '22px', opacity: 0.75 } }
        size="large"
        type="text"
        onClick={ () => setOpenSettings(true) }
      />

      <Drawer title={ assistant.title } onClose={ () => setOpenSettings(false) } open={ openSettings }>
        <AssistantDetails assistant={ assistant }/>
      </Drawer>
    </div>
  );
};