import { Button, Form, Input, message } from 'antd';
import { AxiosError } from 'axios';
import { Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';
import * as Yup from 'yup';
import { useStore } from '../../../hooks/useStore.hook.ts';
import { ApiError } from '../../../interfaces/api.interface.ts';
import { Assistant, UpdateAssistantPayload } from '../../../models/assistant/assistant.interface.ts';
import { InputError } from '../../shared/form/InputError.tsx';


const formValidationSchema = Yup.object().shape({
  title: Yup.string().label('Title').required(),
  desc: Yup.string().label('Description').notRequired(),
  logo: Yup.string().label('Logo').notRequired(),
  model: Yup.object().label('Model').notRequired()
});


interface AssistantCreateProps {
  assistant: Assistant;
}


export const AssistantDetails = ({ assistant }: AssistantCreateProps) => {
  const { assistantStore } = useStore();

  const [ form ] = Form.useForm();

  const formInitialValues: UpdateAssistantPayload = {
    ...assistant
  };

  const handleSubmitError = useCallback(async (e: AxiosError) => {
    message.error((e.response?.data as ApiError).message);
  }, []);

  const onSubmit = useCallback(async (values: UpdateAssistantPayload, { setSubmitting }: FormikHelpers<UpdateAssistantPayload>) => {
    try {
      await assistantStore.update(assistant.id, values);
    } catch (e) {
      await handleSubmitError(e as AxiosError);
    }
    setSubmitting(false);
  }, [ assistant.id, assistantStore, handleSubmitError ]);


  const onDelete = useCallback(async () => {
    try {
      await assistantStore.delete(assistant.id);
    } catch (e) {
      await handleSubmitError(e as AxiosError);
    }
  }, []);


  return (
    <Formik
      initialValues={ formInitialValues }
      validationSchema={ formValidationSchema }
      onSubmit={ onSubmit }>
      { ({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting,
           isValid
         }) => (
        <Form className="assistant-details" form={ form } layout="vertical" onFinish={ handleSubmit }>
          <div className="assistant-details-controls">
            <Form.Item label="Title">
              <Input
                size="large"
                name="title"
                status={ errors.title && touched.title ? 'error' : '' }
                placeholder="Type title"
                autoComplete="on"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.title }
              />
              <InputError name="title"/>
            </Form.Item>

            <Form.Item label="Logo">
              <Input
                size="large"
                name="logo"
                status={ errors.logo && touched.logo ? 'error' : '' }
                placeholder="Logo url"
                autoComplete="on"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.logo }
              />
            </Form.Item>

            <Form.Item label="Description">
              <Input.TextArea
                size="large"
                name="desc"
                status={ errors.desc && touched.desc ? 'error' : '' }
                placeholder="Type description"
                autoComplete="on"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.desc }
              />
            </Form.Item>
          </div>

          <div className="assistant-details-actions">
            <Form.Item style={ { marginTop: 24 } }>
              <Button
                size="large"
                htmlType="submit"
                type={ isSubmitting ? 'default' : 'primary' }
                disabled={ !isValid || isSubmitting }
                loading={ isSubmitting }
                block
                style={ { marginBottom: 6 } }
              >
                Save
              </Button>

              <Button
                size="large"
                htmlType="button"
                type="primary"
                disabled={ !isValid || isSubmitting }
                loading={ isSubmitting }
                block
                danger
                onClick={ onDelete }
              >
                Delete
              </Button>
            </Form.Item>
          </div>
        </Form>
      ) }
    </Formik>
  );
};