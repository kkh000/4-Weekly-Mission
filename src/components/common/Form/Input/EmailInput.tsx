import { useState, ReactNode } from "react";
import { EMAIL_REGEX } from "@/src/constants/regex";
import * as S from "@/src/components/common/Form/FormStyle";

interface Props {
  children: ReactNode;
  errorMessage: string;
  placeholder?: string;
}

const EmailInput = ({ errorMessage, children, placeholder }: Props) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    !EMAIL_REGEX.test(value) ? setError(true) : setError(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <S.Container>
      <S.InputTitle htmlFor="email">{children}</S.InputTitle>
      <S.InputBox $isError={error} $isfocused={focus}>
        <S.Input
          id="email"
          placeholder={placeholder}
          type="email"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </S.InputBox>
      {error && <S.Error>{errorMessage}</S.Error>}
    </S.Container>
  );
};

export default EmailInput;
