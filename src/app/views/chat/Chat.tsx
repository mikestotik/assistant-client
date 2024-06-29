import { Button, Form, Input, message } from 'antd';
import { AxiosError } from 'axios';
import { Formik, FormikHelpers } from 'formik';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useStore } from '../../hooks/useStore.hook.ts';
import { ApiError } from '../../interfaces/api.interface.ts';
import { Assistant, ChatUserMessage } from '../../models/assistant/assistant.interface.ts';


interface ChatProps {
  assistant: Assistant;
}


export const Chat = observer(({ assistant }: ChatProps) => {
  const { assistantStore } = useStore();
  const [ form ] = Form.useForm();

  const initialValues: ChatUserMessage = {
    assistantId: assistant.id,
    message: ''
  };

  const handleSubmitError = useCallback(async (e: AxiosError) => {
    message.error((e.response?.data as ApiError).message);
  }, []);

  const onSubmit = useCallback(async (values: ChatUserMessage, {
    setSubmitting,
    setFieldValue
  }: FormikHelpers<ChatUserMessage>) => {
    try {
      if (values.message.length) {
        await assistantStore.sendMessage(values);
        await setFieldValue('message', '');
      }
    } catch (e) {
      await handleSubmitError(e as AxiosError);
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  }, [ assistantStore, handleSubmitError ]);


  return (
    <div className="chat">
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
                  name="message"
                  status={ errors.message && touched.message ? 'error' : '' }
                  placeholder="Message"
                  autoComplete="on"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.message }
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