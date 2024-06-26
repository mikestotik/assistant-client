import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useStore } from '../../../hooks/useStore.hook.ts';
import { AuthPage } from '../components/AuthPage.tsx';


const formValidationSchema = Yup.object().shape({
  code: Yup.string()
    .matches(/^[0-9]{6}$/, 'Enter a valid code')
    .required('Code is required')
});


export const AuthSignUpConfirmation = observer(() => {
  const [ searchParams ] = useSearchParams();
  const email = searchParams.get('email');
  console.log(email);
  // const { authStore } = useStore();
  //
  // const navigate = useNavigate();
  //
  // const [ form ] = Form.useForm();
  // const [ logoutLoading, setLogoutLoading ] = useState(false);

  // if (!email) {
  //   return <Navigate to={ RoutePaths.AUTH_SIGN_IN }/>;
  // }


  // const formInitialValues: SignInPayload = {
  //   email: authStore.email!,
  //   password: authStore.password!,
  //   code: undefined
  // };
  //
  // const handleSubmitError = useCallback(async (e: AxiosError) => {
  //   const status = e.response?.status as HttpStatusCode;
  //   const data = e.response!.data;
  //
  //   switch (status) {
  //     case HttpStatusCode.BadRequest:
  //       message.error((data as ApiResponse<null, string>).error);
  //       break;
  //     case HttpStatusCode.UnprocessableEntity: {
  //       const withDetails = data as ApiErrorWithDetails;
  //       withDetails.detail.forEach(error => {
  //         message.error(`Error: ${ error.type } | ${ error.loc.join(',') } | ${ error.msg }`);
  //       });
  //       break;
  //     }
  //     case HttpStatusCode.InternalServerError:
  //       message.error('Try again later');
  //       break;
  //     default:
  //       message.error(e.message);
  //       break;
  //   }
  // }, []);
  //
  //
  // const onSubmit = useCallback(async (values: SignInPayload, { setSubmitting }: FormikHelpers<SignInPayload>) => {
  //   try {
  //     await authStore.signIn(values);
  //
  //     navigate(RoutePaths.ROLES);
  //   } catch (e) {
  //     await handleSubmitError(e as AxiosError);
  //   }
  //   setSubmitting(false);
  // }, [ authStore, handleSubmitError, navigate ]);
  //
  //
  // const onLogout = useCallback(async () => {
  //   setLogoutLoading(true);
  //   try {
  //     navigate(RoutePaths.AUTH_WELCOME);
  //   } catch (e) {
  //     message.error((e as Error).message);
  //   }
  //   setLogoutLoading(false);
  // }, [ navigate ]);


  return (
    <AuthPage desc="Enter the 6-digit code which sent to email">
      ...
      {/*<Formik*/ }
      {/*  initialValues={ formInitialValues }*/ }
      {/*  validationSchema={ formValidationSchema }*/ }
      {/*  onSubmit={ onSubmit }>*/ }
      {/*  { ({*/ }
      {/*       handleSubmit,*/ }
      {/*       isSubmitting,*/ }
      {/*       isValid*/ }
      {/*     }) => (*/ }
      {/*    <Form form={ form } layout="vertical" onFinish={ handleSubmit }>*/ }
      {/*      <Form.Item>*/ }
      {/*        <InputMFA name="code"/>*/ }
      {/*      </Form.Item>*/ }

      {/*      <Form.Item className="auth-mfa-support">*/ }
      {/*        Having problems with verification? <a href="mailto:support@plasm.ai">Contact Support</a>*/ }
      {/*      </Form.Item>*/ }

      {/*      <Form.Item>*/ }
      {/*        <Button*/ }
      {/*          size="large"*/ }
      {/*          htmlType="submit"*/ }
      {/*          type={ isSubmitting ? 'default' : 'primary' }*/ }
      {/*          disabled={ !isValid || isSubmitting }*/ }
      {/*          loading={ isSubmitting }*/ }
      {/*          block*/ }
      {/*        >*/ }
      {/*          Confirm*/ }
      {/*        </Button>*/ }
      {/*      </Form.Item>*/ }

      {/*      <div className="auth-logout">*/ }
      {/*        <Button*/ }
      {/*          type="link"*/ }
      {/*          size="large"*/ }
      {/*          onClick={ onLogout }*/ }
      {/*          loading={ logoutLoading }*/ }
      {/*        >*/ }
      {/*          Logout*/ }
      {/*        </Button>*/ }
      {/*      </div>*/ }
      {/*    </Form>*/ }
      {/*  ) }*/ }
      {/*</Formik>*/ }
    </AuthPage>
  );
});
