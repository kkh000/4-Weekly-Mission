import { IconProps } from "@/src/types/commonTypes";
import * as S from "./IconStyle";

const Icon = ({ id, alt, url, image, size = "small", children, onClick }: IconProps) => {
  return (
    <S.IconBox id={id} href={url} onClick={onClick} target="_blank" rel="noreferrer">
      <S.Icon size={size} src={image} alt={alt} />
      <S.IconText>{children}</S.IconText>
    </S.IconBox>
  );
};

export default Icon;
