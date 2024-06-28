import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { Navigate, useParams } from 'react-router-dom';
import { RoutePaths } from '../../const/routes.const.ts';
import { useStore } from '../../hooks/useStore.hook.ts';
import { AssistantLogo } from './components/AssistantLogo.tsx';


export const AssistantChat = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { assistantStore } = useStore();

  const assistant = assistantStore.selectById(id);

  if (!assistant) {
    return <Navigate to={ RoutePaths.ASSISTANT }/>;
  }

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-head-assistant">
          <AssistantLogo title={ assistant.title } updated={ assistant.updated }/>
        </div>

        <div className="chat-head-tools">
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
      </div>

      <div className="chat-body">
        <div className="chat-messages">
          <div className="chat-messages-item">
            <div className="chat-messages-item user">
              <div className="chat-message-user">
                Hello! Write me something..
              </div>
            </div>

            <div className="chat-message-assistant">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage,
              and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
              the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
              1.10.32.
              <br/>
              <br/>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
              original
              form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
          <div className="chat-messages-item user">
            <div className="chat-message-user">
              Hello! Write me something..
            </div>
          </div>
          <div className="chat-messages-item user">
            <div className="chat-message-user">
              Hello! Write me something..
            </div>
          </div>
          <div className="chat-messages-item">
            <div className="chat-message-assistant">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage,
              and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
              the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
              1.10.32.
              <br/>
              <br/>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
              original
              form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
        </div>
      </div>

      <div className="chat-controls">
        <div className="chat-controls-input">
          <Input
            size="large"
          />
        </div>
        <div className="chat-controls-items">
          <div className="chat-controls-items-item">
            <Button
              icon={ <i className="icon icon-microphone"/> }
              size="large"
              style={ { fontSize: '20px', opacity: 0.75 } }
            />
          </div>
        </div>
      </div>
    </div>
  );
});