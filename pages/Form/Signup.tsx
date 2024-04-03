import { useState } from "react";
import { useRouter } from "next/router";
import CreateAxiosInstance from "@/src/utils/axios";
import Title from "@/src/components/common/Form/FormTitle";
import InputEmail from "@/src/components/common/Form/Input/EmailInput";
import InputPassword from "@/src/components/common/Form/Input/PasswordInput";
import InputPasswordCheck from "@/src/components/common/Form/Input/PasswordCheckInput";
import { PASSWORD_REGEX, EMAIL_REGEX } from "@/src/constants/regex";
import Social from "@/src/components/common/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";

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

  const route = useRouter();

  const handleFocusEmail = () => {
    setEmailFocus(true);
  };

  const handleBlurEmail = async () => {
    setEmailFocus(false);

    if (!EMAIL_REGEX.test(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage("올바른 이메일 주소가 아닙니다");
    } else {
      try {
        const axios = CreateAxiosInstance();
        const response = await axios.post("/check-email", {
          email: emailValue,
        });

        setEmailError(false);
      } catch (error) {
        setEmailError(true);
        setEmailErrorMessage("이미 사용 중인 이메일입니다.");
      }
    }

    console.log(emailError);

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

  const handlePasswordCheckFocus = () => {
    setPasswordCheckFocus(true);
  };
  const handleBlurPassword = () => {
    setPasswordFocus(false);

    if (!PASSWORD_REGEX.test(passwordValue)) {
      setPasswordError(true);
      setPasswordErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
      setPasswordError(false);
    }

    if (passwordValue.trim() === "") {
      setPasswordErrorMessage("비밀번호를 입력해주세요");
    }
  };

  const handleBlurPasswordCheck = () => {
    setPasswordCheckFocus(false);

    if (passwordValue !== passwordCheckValue) {
      setPasswordCheckError(true);
      setPasswordCheckErrorMessage("비밀번호가 일치하지 않아요");
    } else {
      setPasswordCheckError(false);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handlePasswordCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheckValue(event.target.value);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const axios = CreateAxiosInstance();
      const response = await axios.post("/sign-up", {
        email: emailValue,
        password: passwordValue,
      });

      console.log(response);

      if (response.status === 200) {
        route.push("/folder");
        const responseData = response.data;
        localStorage.setItem("token", responseData.data.accessToken);
      }
    } catch (error) {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick;
    }
  };

  return (
    <>
      <Title path="/signin" title="이미 회원이신가요?" linkMessage="로그인 하기" />
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
        id="signupPassword"
        error={passwordError}
        onBlur={handleBlurPassword}
        onFocus={handlePasswordFocus}
        onChange={handlePasswordChange}
        isFocused={passwordFocus}
        errorMessage={passwordErrorMessage}
        password={passwordValue}
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
      >
        비밀번호
      </InputPassword>
      <InputPasswordCheck
        type="password"
        error={passwordCheckError}
        onBlur={handleBlurPasswordCheck}
        onFocus={handlePasswordCheckFocus}
        onChange={handlePasswordCheckChange}
        isFocused={passwordCheckFocus}
        errorMessage={passwordCheckErrorMessage}
        passwordCheck={passwordCheckValue}
        placeholder="비밀번호와 일치하는 값을 입력해 주세요."
      >
        비밀번호확인
      </InputPasswordCheck>
      <FormButton type="submit" onClick={handleClick} onKeyDown={() => handleButtonKeyDown}>
        회원가입
      </FormButton>
      <Social />
    </>
  );
};

export default Signup;
