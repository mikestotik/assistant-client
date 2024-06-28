import { Button } from 'antd';
import useModal from 'antd/lib/modal/useModal';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useStore } from '../../hooks/useStore.hook.ts';
import { AssistantCreate } from './components/AssistantCreate.tsx';
import { AssistantItem } from './components/AssistantItem.tsx';


export const AssistantTeam = observer(() => {
  const { assistantStore } = useStore();

  const [ modal, contextHolder ] = useModal();

  const onCreateAgent = useCallback(() => {
    const { destroy } = modal.info({
      title: 'New Assistant',
      content: <AssistantCreate onClose={ onDestroy }/>,
      closable: true,
      maskClosable: true,
      icon: null,
      footer: null
    });


    function onDestroy() {
      destroy();
    }
  }, [ modal ]);


  return (
    <div className="team">
      <div className="team-create">
        <Button
          icon={ <i className="icon icon-plus"/> }
          size="large"
          type="primary"
          block
          onClick={ onCreateAgent }
        >
          Add Assistant
        </Button>
      </div>

      <div className="team-list">
        { assistantStore.assistants.map((item, index) => (
          <AssistantItem key={ index } title={ item.title } desc={ item.desc } updated={ item.updated }/>
        )) }
      </div>

      { contextHolder }
    </div>
  );
});