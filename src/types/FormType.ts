import { NextRouter } from "next/router";

export interface FormTitleProps {
  message: string;
  title: string;
  path: string;
}

export interface FormInputProps {
  children: React.ReactNode;
  placeholder: string;
  error: boolean;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  errorMessage: string;
  email?: string;
  password?: string;
}

export interface CheckDuplicateProps {
  emailValue: string;
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface ValidateSignUpProps extends CheckDuplicateProps {
  passwordValue: string;
  router: NextRouter;
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface ValidateSignInProps extends ValidateSignUpProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
