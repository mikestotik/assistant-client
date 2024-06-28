import { Button, Form, Input, message } from 'antd';
import { AxiosError } from 'axios';
import { Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';
import * as Yup from 'yup';
import { useStore } from '../../../hooks/useStore.hook.ts';
import { ApiError } from '../../../interfaces/api.interface.ts';
import { CreateAssistantPayload } from '../../../models/assistant/assistant.interface.ts';
import { InputError } from '../../shared/form/InputError.tsx';


const formValidationSchema = Yup.object().shape({
  title: Yup.string().label('Title').required(),
  desc: Yup.string().label('Description').notRequired(),
  logo: Yup.string().label('Logo').notRequired()
});


interface AssistantCreateProps {
  onClose: () => void;
}


export const AssistantCreate = ({ onClose }: AssistantCreateProps) => {
  const { assistantStore } = useStore();

  const [ form ] = Form.useForm();

  const formInitialValues: CreateAssistantPayload = {
    title: '',
    desc: '',
    logo: ''
  };

  const handleSubmitError = useCallback(async (e: AxiosError) => {
    message.error((e.response?.data as ApiError).message);
  }, []);

  const onSubmit = useCallback(async (values: CreateAssistantPayload, { setSubmitting }: FormikHelpers<CreateAssistantPayload>) => {
    try {
      await assistantStore.create(values);

      onClose();
    } catch (e) {
      await handleSubmitError(e as AxiosError);
    }
    setSubmitting(false);
  }, [ assistantStore, handleSubmitError, onClose ]);

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
        <Form form={ form } layout="vertical" onFinish={ handleSubmit }>
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

          <Form.Item style={ { marginTop: 24 } }>
            <Button
              size="large"
              htmlType="submit"
              type={ isSubmitting ? 'default' : 'primary' }
              disabled={ !isValid || isSubmitting }
              loading={ isSubmitting }
              block
            >
              Create Assistant
            </Button>
          </Form.Item>
        </Form>
      ) }
    </Formik>
  );
};