import Title from "@/pages/(form)/_components/FormTitle";
import InputEmail from "@/pages/(form)/_components/FormInput";
import InputPassword from "@/pages/(form)/_components/FormInput";
import InputPasswordCheck from "@/pages/(form)/_components/FormInput";
import Social from "@/pages/(form)/_components/FormSocial";
import { FormButton } from "@/src/components/Button/ButtonStyle";

const Signup = () => {
  return (
    <>
      <Title path="/signin" title="이미 회원이신가요?" linkMessage="로그인 하기" />
      <InputEmail type="email" errorMessage="내용을 다시 작성해 주세요" placeholder="내용입력">
        이메일
      </InputEmail>
      <InputPassword type="password" errorMessage="내용을 다시 작성해 주세요" placeholder="내용입력">
        비밀번호
      </InputPassword>
      <InputPasswordCheck type="password" errorMessage="내용을 다시 작성해 주세요" placeholder="내용입력">
        비밀번호확인
      </InputPasswordCheck>
      <FormButton>회원가입</FormButton>
      <Social />
    </>
  );
};

export default Signup;
