import { FormInputProps } from "@/src/types/FormType";
import * as S from "@/src/components/common/Form/FormStyle";

const EmailInput = ({
  onBlur,
  onChange,
  onFocus,
  isFocused,
  error,
  placeholder,
  children,
  errorMessage,
  email,
}: FormInputProps) => {
  return (
    <S.Container>
      <S.InputTitle htmlFor="email">{children}</S.InputTitle>
      <S.InputBox $isError={error} $isfocused={isFocused}>
        <S.Input
          id="email"
          type="email"
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={email}
          autoComplete="username"
        />
      </S.InputBox>
      {error && <S.Error>{errorMessage}</S.Error>}
    </S.Container>
  );
};

export default EmailInput;
