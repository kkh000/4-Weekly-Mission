import Title from "@/src/components/Form/FormTitle";
import InputEmail from "@/src/components/Form/FormInput";
import InputPassword from "@/src/components/Form/FormInput";
import Social from "@/src/components/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";

const Signin = () => {
  return (
    <>
      <Title path="/signup" title="회원이 아니신가요?" linkMessage="회원 가입하기" />
      <InputEmail type="email" errorMessage="내용을 다시 작성해 주세요">
        이메일
      </InputEmail>
      <InputPassword type="password" errorMessage="내용을 다시 작성해 주세요">
        비밀번호
      </InputPassword>
      <FormButton>로그인</FormButton>
      <Social />
    </>
  );
};

export default Signin;
