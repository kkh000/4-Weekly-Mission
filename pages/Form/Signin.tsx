import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Title from "@/src/components/common/Form/FormTitle";
import InputEmail from "@/src/components/common/Form/Input/EmailInput";
import InputPassword from "@/src/components/common/Form/Input/PasswordInput";
import Social from "@/src/components/common/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";
import { useAuth } from "@/src/contexts/AuthContext";
import { ValidateSignIn } from "@/src/utils/apis/formApi";
import { checkEmailRegex } from "@/src/utils/regex";
import {
  IS_EMPTY_EMAIL,
  IS_EMPTY_PASSOWRD,
  IS_VALID_FORMAT_EMAIL,
  SIGN_IN_FORM_MESSAGE,
  SIGN_IN_FORM_TITLE,
} from "@/src/constants/constnats";

const Signin = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleFocusEmail = () => {
    setEmailError(false);
    setEmailFocus(true);
  };

  const handleFocusPassword = () => {
    setPasswordError(false);
    setPasswordFocus(true);
  };

  const handleBlurEmail = () => {
    setEmailFocus(false);

    if (!checkEmailRegex(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage(IS_VALID_FORMAT_EMAIL);
    }
    if (checkEmailRegex(emailValue)) {
      setEmailError(false);
    }

    if (emailValue.trim() === "") {
      setEmailErrorMessage(IS_EMPTY_EMAIL);
    }
  };

  const handleBlurPassword = () => {
    setPasswordFocus(false);

    if (passwordValue.trim() === "") {
      setPasswordError(true);
      setPasswordErrorMessage(IS_EMPTY_PASSOWRD);
    }
    if (passwordValue.trim() !== "") {
      setPasswordError(false);
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ValidateSignIn({
      emailValue,
      passwordValue,
      router,
      setIsLoggedIn,
      setEmailError,
      setPasswordError,
      setEmailErrorMessage,
      setPasswordErrorMessage,
    });
  };

  const handleButtonSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClickSubmit;
    }
  };

  return (
    <>
      <Title path="signup" title={SIGN_IN_FORM_TITLE} message={SIGN_IN_FORM_MESSAGE} />
      <InputEmail
        error={emailError}
        onBlur={handleBlurEmail}
        onFocus={handleFocusEmail}
        onChange={handleChangeEmail}
        isFocused={emailFocus}
        errorMessage={emailErrorMessage}
        email={emailValue}
        placeholder={IS_EMPTY_EMAIL}
      >
        이메일
      </InputEmail>
      <InputPassword
        error={passwordError}
        onBlur={handleBlurPassword}
        onFocus={handleFocusPassword}
        onChange={handlePasswordChange}
        isFocused={passwordFocus}
        errorMessage={passwordErrorMessage}
        password={passwordValue}
        placeholder={IS_EMPTY_PASSOWRD}
      >
        비밀번호
      </InputPassword>
      <FormButton type="submit" onClick={handleClickSubmit} onKeyDown={() => handleButtonSubmit}>
        로그인
      </FormButton>
      <Social />
    </>
  );
};

export default Signin;
