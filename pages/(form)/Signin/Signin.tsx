import Title from "@/pages/(form)/_components/FormTitle";
import InputEmail from "@/pages/(form)/_components/FormInput";
import InputPassword from "@/pages/(form)/_components/FormInput";
import Social from "@/pages/(form)/_components/FormSocial";
import { FormButton } from "@/src/components/Button/ButtonStyle";

const Signin = () => {
  return (
    <>
      <Title path="/signup" title="회원이 아니신가요?" linkMessage="회원 가입하기" />
      <InputEmail type="email" errorMessage="내용을 다시 작성해 주세요" placeholder="내용입력">
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
