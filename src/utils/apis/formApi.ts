import { CheckDuplicateProps, ValidateSignInProps, ValidateSignUpProps } from "@/src/types/FormType";
import CreateAxiosInstance from "@/src/utils/axios";

export const ValidateSignIn = async ({
  emailValue,
  passwordValue,
  router,
  setIsLoggedIn,
  setEmailError,
  setPasswordError,
  setEmailErrorMessage,
  setPasswordErrorMessage,
}: ValidateSignInProps) => {
  const axios = CreateAxiosInstance();
  try {
    const response = await axios.post("/sign-in", {
      email: emailValue,
      password: passwordValue,
    });

    if (response.status === 200) {
      setIsLoggedIn(true);
      router.push("/folder");
      const isValidUser = response.data.data;
      localStorage.setItem("token", isValidUser.accessToken);
    }
  } catch (error) {
    setEmailError(true);
    setPasswordError(true);
    setEmailErrorMessage("이메일을 확인해 주세요");
    setPasswordErrorMessage("비밀번호를 확인해주세요");
  }
};

export const ValidateSignUp = async ({
  emailValue,
  passwordValue,
  router,
  setEmailError,
  setPasswordError,
  setEmailErrorMessage,
  setPasswordErrorMessage,
}: ValidateSignUpProps) => {
  const axios = CreateAxiosInstance();
  try {
    const response = await axios.post("/sign-up", {
      email: emailValue,
      password: passwordValue,
    });

    if (response.status === 200) {
      router.push("/folder");
      const isValidUser = response.data.data;
      localStorage.setItem("token", isValidUser.accessToken);
    }
  } catch (error) {
    setEmailError(true);
    setPasswordError(true);
    setEmailErrorMessage("이메일을 확인해 주세요");
    setPasswordErrorMessage("비밀번호를 확인해주세요");
  }
};

export const checkDuplicate = async ({ emailValue, setEmailError, setEmailErrorMessage }: CheckDuplicateProps) => {
  const axios = CreateAxiosInstance();
  try {
    await axios.post("/check-email", {
      email: emailValue,
    });

    setEmailError(false);
  } catch (error) {
    setEmailError(true);
    setEmailErrorMessage("이미 사용 중인 이메일입니다.");
  }
};
