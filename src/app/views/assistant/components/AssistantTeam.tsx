import { Button } from 'antd';
import useModal from 'antd/lib/modal/useModal';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePaths } from '../../../const/routes.const.ts';
import { useStore } from '../../../hooks/useStore.hook.ts';
import { AssistantCreate } from './AssistantCreate.tsx';
import { AssistantItem } from './AssistantItem.tsx';


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
      <div className="team-title">My Team</div>
      <div className="team-list">
        { assistantStore.assistants.map((item, index) => (
          <NavLink key={ index } to={ RoutePaths.ASSISTANT_CHAT.replace(':id', item.id) }>
            { ({ isActive }) => (
              <AssistantItem
                title={ item.title }
                desc={ item.desc }
                logo={ item.logo }
                updated={ item.updated }
                active={ isActive }
              />
            ) }
          </NavLink>
        )) }
      </div>

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

      { contextHolder }
    </div>
  );
});