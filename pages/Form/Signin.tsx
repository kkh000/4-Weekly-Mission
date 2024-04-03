import { useState } from "react";
import { useRouter } from "next/router";
import { EMAIL_REGEX } from "@/src/constants/regex";
import Title from "@/src/components/common/Form/FormTitle";
import InputEmail from "@/src/components/common/Form/Input/EmailInput";
import InputPassword from "@/src/components/common/Form/Input/PasswordInput";
import Social from "@/src/components/common/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";
import CreateAxiosInstance from "@/src/utils/axios";

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

  const handleFocusEmail = () => {
    setEmailFocus(true);
  };

  const handleBlurEmail = () => {
    setEmailFocus(false);

    if (!EMAIL_REGEX.test(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage("올바른 이메일 주소가 아닙니다");
    } else {
      setEmailError(false);
    }

    if (emailValue.trim() === "") {
      setEmailErrorMessage("이메일을 입력해주세요");
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handleBlurPassword = () => {
    setPasswordFocus(false);

    if (passwordValue.trim() === "") {
      setPasswordError(true);
      setPasswordErrorMessage("비밀번호를 입력해 주세요");
    } else {
      setPasswordError(false);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const axios = CreateAxiosInstance();
      const response = await axios.post("/sign-in", {
        email: emailValue,
        password: passwordValue,
      });

      if (response.status === 200) {
        router.push("/folder");
        const responseData = response.data;
        localStorage.setItem("token", responseData.data.accessToken);
      }
    } catch (error) {
      setEmailError(true);
      setPasswordError(true);
      setEmailErrorMessage("이메일을 확인해 주세요");
      setPasswordErrorMessage("비밀번호를 확인해주세요");
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick;
    }
  };

  return (
    <>
      <Title path="signup" title="회원이 아니신가요?" linkMessage="회원 가입하기" />
      <InputEmail
        error={emailError}
        onBlur={handleBlurEmail}
        onFocus={handleFocusEmail}
        onChange={handleChangeEmail}
        isFocused={emailFocus}
        errorMessage={emailErrorMessage}
        email={emailValue}
        placeholder="이메일을 입력해 주세요."
      >
        이메일
      </InputEmail>
      <InputPassword
        id="signinPassword"
        error={passwordError}
        onBlur={handleBlurPassword}
        onFocus={handlePasswordFocus}
        onChange={handlePasswordChange}
        isFocused={passwordFocus}
        errorMessage={passwordErrorMessage}
        password={passwordValue}
        placeholder="비밀번호를 입력해 주세요."
      >
        비밀번호
      </InputPassword>
      <FormButton type="submit" onClick={handleClick} onKeyDown={() => handleButtonKeyDown}>
        로그인
      </FormButton>
      <Social />
    </>
  );
};

export default Signin;
