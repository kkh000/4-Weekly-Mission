import { useState, ReactNode } from "react";
import { EYE_CLOSED, EYE_OPENED } from "@/src/constants/image";

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
  password: string;
  id: string;
}

const PasswordInput = ({
  onBlur,
  onChange,
  onFocus,
  isFocused,
  error,
  placeholder,
  children,
  errorMessage,
  password,
  id,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.InputTitle htmlFor={id}>{children}</S.InputTitle>
      <S.InputBox $isError={error} $isfocused={isFocused}>
        <S.Input
          id={id}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={password}
          autoComplete="new-password"
        />
        <S.Image src={showPassword ? EYE_OPENED : EYE_CLOSED} alt="eye" onClick={handleTogglePassword} />
      </S.InputBox>
      {error && <S.Error>{errorMessage}</S.Error>}
    </S.Container>
  );
};

export default PasswordInput;
