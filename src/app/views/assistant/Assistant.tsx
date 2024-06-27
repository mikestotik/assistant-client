import { Button } from 'antd';
import { observer } from 'mobx-react-lite';


export const Assistant = observer(() => {

  return (
    <div className="assistant">
      <div className="assistant-ai">
        Hi! How can I help you?
      </div>

      <div className="assistant-animation">
        {/*<Scene*/ }
        {/*  layers={ 5 }*/ }
        {/*  speeds={ [ [ 5, 10 ], 20, 30, [ 35, 40 ], 50 ] }*/ }
        {/*  colors={ [ [ '#74a7f1', '#ffffff00' ], '#ffffff', [ '#74a7f150', '#ffffff' ], [ '#74a7f1', '#ffffff50' ], [ '#74a7f150', '#ffffff' ] ] }*/ }
        {/*  lineWidths={ [ [ 20, 40 ], 30, [ 40, 80 ], 70, 80 ] }*/ }
        {/*  innerRadii={ [ [ 0.1, 0.8 ], 0.1, [ 0.1, 0.85 ], 0.1, 0.9 ] }*/ }
        {/*  outerRadii={ [ [ 1, 1.1 ], 1.1, [ 1, 1.2 ], 1.1, 1.2 ] }*/ }
        {/*  gradientWidths={ [ [ 0.05, 0.1 ], 0.1, [ 0.05, 0.15 ], 0.1, 0.2 ] }*/ }
        {/*/>*/ }
      </div>

      <div className="assistant-user">
        I need mobile UI designed by Sigma Software Design..

        <div className="assistant-user-actions">
          <Button
            shape="circle"
            icon={ <i className="icon icon-microphone"/> }
            size="large"
          />
        </div>
      </div>
    </div>
  );
});