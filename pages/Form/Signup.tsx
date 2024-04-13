import { useState } from "react";
import { useRouter } from "next/router";
import Title from "@/src/components/common/Form/FormTitle";
import InputEmail from "@/src/components/common/Form/Input/EmailInput";
import InputPassword from "@/src/components/common/Form/Input/PasswordInput";
import InputPasswordCheck from "@/src/components/common/Form/Input/PasswordInput";
import { checkEmailRegex, checkPassowrdRegex } from "@/src/utils/regex";
import Social from "@/src/components/common/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";
import { ValidateSignUp, checkDuplicate } from "@/src/utils/apis/formApi";
import {
  IS_EMPTY_EMAIL,
  IS_EMPTY_PASSOWRD,
  IS_VALID_FORMAT_EMAIL,
  IS_VALID_FORMAT_PASSWORD,
  MATCH_PASSWORD,
  PASSOWRD_FORMAT,
  SIGN_UP_FORM_MESSAGE,
  SIGN_UP_FORM_TITLE,
} from "@/src/constants/constnats";

const Signup = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordCheckValue, setPasswordCheckValue] = useState("");
  const [passwordCheckFocus, setPasswordCheckFocus] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] = useState("");

  const router = useRouter();

  const handleFocusEmail = () => {
    setEmailError(false);
    setEmailFocus(true);
  };

  const handlePasswordFocus = () => {
    setPasswordError(false);
    setPasswordFocus(true);
  };

  const handlePasswordCheckFocus = () => {
    setPasswordCheckError(false);
    setPasswordCheckFocus(true);
  };

  const handleBlurEmail = () => {
    setEmailFocus(false);

    if (!checkEmailRegex(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage(IS_VALID_FORMAT_EMAIL);
    }

    if (checkEmailRegex(emailValue)) {
      checkDuplicate({
        emailValue,
        setEmailError,
        setEmailErrorMessage,
      });
    }

    if (emailValue.trim() === "") {
      setEmailErrorMessage(IS_EMPTY_EMAIL);
    }
  };

  const handleBlurPassword = () => {
    setPasswordFocus(false);

    if (!checkPassowrdRegex(passwordValue)) {
      setPasswordError(true);
      setPasswordErrorMessage(PASSOWRD_FORMAT);
    }
    if (checkPassowrdRegex(passwordValue)) {
      setPasswordError(false);
    }

    if (passwordValue.trim() === "") {
      setPasswordErrorMessage(IS_EMPTY_PASSOWRD);
    }
  };

  const handleBlurPasswordCheck = () => {
    setPasswordCheckFocus(false);

    if (passwordValue !== passwordCheckValue) {
      setPasswordCheckError(true);
      setPasswordCheckErrorMessage(IS_VALID_FORMAT_PASSWORD);
    }
    if (passwordValue === passwordCheckValue) {
      setPasswordCheckError(false);
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handlePasswordCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheckValue(event.target.value);
  };

  const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ValidateSignUp({
      emailValue,
      passwordValue,
      router,
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
      <Title path="/signin" title={SIGN_UP_FORM_TITLE} message={SIGN_UP_FORM_MESSAGE} />
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
        onFocus={handlePasswordFocus}
        onChange={handlePasswordChange}
        isFocused={passwordFocus}
        errorMessage={passwordErrorMessage}
        password={passwordValue}
        placeholder={PASSOWRD_FORMAT}
      >
        비밀번호
      </InputPassword>
      <InputPasswordCheck
        error={passwordCheckError}
        onBlur={handleBlurPasswordCheck}
        onFocus={handlePasswordCheckFocus}
        onChange={handlePasswordCheckChange}
        isFocused={passwordCheckFocus}
        errorMessage={passwordCheckErrorMessage}
        password={passwordCheckValue}
        placeholder={MATCH_PASSWORD}
      >
        비밀번호확인
      </InputPasswordCheck>
      <FormButton type="submit" onClick={handleClickSubmit} onKeyDown={() => handleButtonSubmit}>
        회원가입
      </FormButton>
      <Social />
    </>
  );
};

export default Signup;
