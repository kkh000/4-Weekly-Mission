import Title from "@/src/components/Form/FormTitle";
import InputEmail from "@/src/components/Form/FormInput";
import InputPassword from "@/src/components/Form/FormInput";
import InputPasswordCheck from "@/src/components/Form/FormInput";
import Social from "@/src/components/Form/FormSocial";
import { FormButton } from "@/src/components/common/Button/ButtonStyle";

const SignupForm = () => {
  return (
    <>
      <Title path="/signin" title="이미 회원이신가요?" linkMessage="로그인 하기" />
      <InputEmail type="email" errorMessage="내용을 다시 작성해 주세요">
        이메일
      </InputEmail>
      <InputPassword type="password" errorMessage="내용을 다시 작성해 주세요">
        비밀번호
      </InputPassword>
      <InputPasswordCheck type="password" errorMessage="내용을 다시 작성해 주세요">
        비밀번호확인
      </InputPasswordCheck>
      <FormButton>회원가입</FormButton>
      <Social />
    </>
  );
};

export default SignupForm;
