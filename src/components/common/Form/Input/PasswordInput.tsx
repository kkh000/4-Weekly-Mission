import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EYE_CLOSED, EYE_OPENED } from "@/src/constants/image";
import { FormInputProps } from "@/src/types/FormType";
import * as S from "@/src/components/common/Form/FormStyle";

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
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const uniqueId = uuidv4();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.InputTitle htmlFor={uniqueId}>{children}</S.InputTitle>
      <S.InputBox $isError={error} $isfocused={isFocused}>
        <S.Input
          id={uniqueId}
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
