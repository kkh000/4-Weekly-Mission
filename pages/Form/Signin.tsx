import Title from "@/src/components/common/Form/FormTitle";
import InputEmail from "@/src/components/common/Form/Input/EmailInput";
import InputPassword from "@/src/components/common/Form/Input/PasswordInput";
import Social from "@/src/components/common/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";

const Signin = () => {
  return (
    <>
      <Title path="signup" title="회원이 아니신가요?" linkMessage="회원 가입하기" />
      <InputEmail errorMessage="내용을 다시 작성해 주세요" placeholder="내용입력">
        이메일
      </InputEmail>
      <InputPassword type="password" errorMessage="내용을 다시 작성해 주세요" placeholder="내용입력">
        비밀번호
      </InputPassword>
      <FormButton>로그인</FormButton>
      <Social />
    </>
  );
};

export default Signin;
