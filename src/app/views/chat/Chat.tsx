import { Button, Form, Input, message } from 'antd';
import { AxiosError } from 'axios';
import { Formik, FormikHelpers } from 'formik';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useStore } from '../../hooks/useStore.hook.ts';
import { ApiError } from '../../interfaces/api.interface.ts';
import { Assistant } from '../../models/assistant/assistant.interface.ts';
import { CreateUserMessage } from '../../models/chat/chat.interface.ts';


interface ChatProps {
  assistant: Assistant;
}


export const Chat = observer(({ assistant }: ChatProps) => {
  const { chatStore } = useStore();
  const [ form ] = Form.useForm();

  useEffect(() => {

  }, []);

  const initialValues: CreateUserMessage = {
    assistant: assistant.id,
    text: ''
  };

  const handleSubmitError = useCallback(async (e: AxiosError) => {
    message.error((e.response?.data as ApiError).message);
  }, []);

  const onSubmit = useCallback(async (values: CreateUserMessage, {
    setSubmitting,
    setFieldValue
  }: FormikHelpers<CreateUserMessage>) => {
    try {
      if (values.text.length) {
        await chatStore.create(values);
        await setFieldValue('text', '');
      }
    } catch (e) {
      await handleSubmitError(e as AxiosError);
    }
    setSubmitting(false);
  }, [ chatStore, handleSubmitError ]);


  return (
    <div className="chat">
      <div className="chat-messages">
        ...
      </div>

      <div className="chat-controls">
        <div className="chat-controls-input">
          <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }>
            { ({
                 values,
                 errors,
                 touched,
                 handleChange,
                 handleBlur,
                 handleSubmit,
                 isSubmitting
               }) => (
              <Form form={ form } onFinish={ handleSubmit }>
                <Input
                  size="large"
                  name="text"
                  status={ errors.text && touched.text ? 'error' : '' }
                  placeholder="Type Message"
                  autoComplete="on"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.text }
                  disabled={ isSubmitting }
                />
              </Form>
            ) }
          </Formik>
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