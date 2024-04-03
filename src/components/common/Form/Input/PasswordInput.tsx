import { useState, ReactNode } from "react";
import { EYE_CLOSED, EYE_OPENED } from "@/src/constants/image";
import { PASSWORD_REGEX } from "@/src/constants/regex";
import * as S from "@/src/components/common/Form/FormStyle";

interface Props {
  children: ReactNode;
  type: string;
  errorMessage: string;
  placeholder?: string;
}

const PasswordInput = ({ type, errorMessage, children, placeholder }: Props) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    !PASSWORD_REGEX.test(value) ? setError(true) : setError(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <S.Container>
      <S.InputTitle htmlFor={type}>{children}</S.InputTitle>
      <S.InputBox $isError={error} $isfocused={focus}>
        <S.Input
          id={type}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <S.Image src={showPassword ? EYE_OPENED : EYE_CLOSED} alt="eye" onClick={handleTogglePassword} />
      </S.InputBox>
      {error && <S.Error>{errorMessage}</S.Error>}
    </S.Container>
  );
};

export default PasswordInput;
