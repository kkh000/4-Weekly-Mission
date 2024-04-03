import Icon from "@/src/components/common/Icon/Icon";
import { FORM_SOCIAL_ICON_LIST } from "@/src/constants/list";
import * as S from "@/src/components/common/Form/FormStyle";

const FormSocial = () => {
  return (
    <S.ContainerSocial>
      <S.InputTitle>소셜 로그인</S.InputTitle>
      <S.BoxIcon>
        {FORM_SOCIAL_ICON_LIST.map(({ image, url, alt }) => (
          <Icon key={alt} url={url} image={image} alt={alt} size="large" />
        ))}
      </S.BoxIcon>
    </S.ContainerSocial>
  );
};

export default FormSocial;
