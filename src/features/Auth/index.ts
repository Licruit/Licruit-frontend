import GenericForm from './components/common/Form/GenericForm';
import FormTitle from './components/common/FormTitle/FormTitle';
import TitleAndStep from './components/common/FormTitle/TitleAndStep';
import FindPasswordForm from './components/FindPassword/FindPasswordForm';
import LoginForm from './components/Login/LoginForm';
import JoinForm from './components/Join/JoinForm';
import { useFunnel } from './hooks/useFunnel';
import { LoginForm as LoginFormType } from './types/login.d';
import { useLogin } from './hooks/useLogin';
import { requestResetPassword, resetPassword } from './api/findPassword.api';

export {
  LoginForm,
  FindPasswordForm,
  GenericForm,
  FormTitle,
  TitleAndStep,
  useFunnel,
  JoinForm,
  useLogin,
  requestResetPassword,
  resetPassword,
};

export type { LoginFormType };
