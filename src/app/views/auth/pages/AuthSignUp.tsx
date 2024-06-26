import { Button, Form, Input } from 'antd';
import Icon from 'antd/es/icon';
import { AxiosError } from 'axios';
import { Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Validation } from '../../../const/validation.const.ts';
import { useStore } from '../../../hooks/useStore.hook.ts';
import { SignUpPayload } from '../../../models/auth/auth.interfaces.ts';
import { InputError } from '../../shared/InputError.tsx';
import { AuthPage } from '../components/AuthPage.tsx';


const passwordValidationMessage = 'Password must contain letters, digits and be 6-25 characters long.';
const passwordNotMatchMessage = 'Passwords must match.';

const formValidationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Incorrect email format')
    .required(),
  password: Yup.string()
    .label('Password')
    .matches(Validation.PASSWORD_REGEXP, { message: passwordValidationMessage })
    .required(),
  confirmPassword: Yup.string()
    .label('Confirm password')
    .matches(Validation.PASSWORD_REGEXP, { message: passwordValidationMessage })
    .oneOf([ Yup.ref('password'), '' ], passwordNotMatchMessage)
    .required()
});

export const AuthSignUp = () => {
  const { authStore } = useStore();

  const [ form ] = Form.useForm();

  const navigate = useNavigate();

  const formInitialValues: SignUpPayload = {
    email: '',
    password: '',
    confirmPassword: ''
  };


  const handleSubmitError = useCallback(async (e: AxiosError) => {
    console.log(e);
  }, []);


  const onSubmit = useCallback(async (values: SignUpPayload, { setSubmitting }: FormikHelpers<SignUpPayload>) => {
    try {
      await authStore.signUp(values);

      // navigate(RoutePaths.ROLES);
    } catch (e) {
      await handleSubmitError(e as AxiosError);
    }
    setSubmitting(false);
  }, [ authStore, handleSubmitError, navigate ]);


  return (
    <AuthPage desc="Create a new account with an email address.">
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
            <Form.Item label="Email">
              <Input
                size="large"
                type="email"
                name="email"
                status={ errors.email && touched.email ? 'error' : '' }
                placeholder="username@domain.com"
                autoComplete="on"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.email }
                prefix={ <i className="icon icon-email"/> }
              />
              <InputError name="email"/>
            </Form.Item>

            <Form.Item label="Password">
              <Input
                size="large"
                type="password"
                name="password"
                status={ errors.password && touched.password ? 'error' : '' }
                placeholder="Enter your Password"
                autoComplete="on"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.password }
                prefix={ <i className="icon icon-lock"/> }
              />
              <InputError name="password"/>
            </Form.Item>

            <Form.Item label="Re-type Password">
              <Input
                size="large"
                type="password"
                name="confirmPassword"
                status={ errors.confirmPassword && touched.confirmPassword ? 'error' : '' }
                placeholder="Re-type Password"
                autoComplete="on"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.confirmPassword }
                prefix={ <i className="icon icon-lock"/> }
              />
              <InputError name="confirmPassword"/>
            </Form.Item>

            <br/>

            <Form.Item>
              <Button
                size="large"
                htmlType="submit"
                type={ isSubmitting ? 'default' : 'primary' }
                disabled={ !isValid || isSubmitting }
                loading={ isSubmitting }
                block
              >
                Create an account
              </Button>
            </Form.Item>

            <div className="auth-back">
              <Button type="link">Sign In</Button>
            </div>
          </Form>
        ) }
      </Formik>
    </AuthPage>
  );
};