import { useState, ReactNode } from "react";
import { EMAIL_REGEX } from "@/src/constants/regex";
import * as S from "@/src/components/common/Form/FormStyle";

interface Props {
  children: ReactNode;
  placeholder: string;
  error: boolean;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  errorMessage: string;
  email: string;
}

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
}: Props) => {
  return (
    <S.Container>
      <S.InputTitle htmlFor="email">{children}</S.InputTitle>
      <S.InputBox $isError={error} $isfocused={isFocused}>
        <S.Input
          id="email"
          placeholder={placeholder}
          type="email"
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
