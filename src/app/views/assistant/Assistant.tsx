import { Button } from 'antd';
import { observer } from 'mobx-react-lite';


export const Assistant = observer(() => {
  return (
    <div className="assistant">
      <div className="assistant-result">
        Hi! How can I help you?
      </div>

      <div className="assistant-animation">
        ...
      </div>

      <div className="assistant-user">
        I need mobile UI designed by Sigma Software Design..
      </div>

      <div className="assistant-actions">
        <Button
          shape="circle"
          icon={ <i className="icon icon-microphone"/> }
          size="large"
        />
      </div>
    </div>
  );
});