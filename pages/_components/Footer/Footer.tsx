import Link from "next/link";
import Icon from "@/src/components/Icon/Icon";
import { FOOTER_ICON_LIST } from "@/src/constants/list";
import * as S from "./FooterStyle";

const Footer = () => {
  return (
    <S.Container>
      <S.Company>©codeit - 2023</S.Company>
      <S.LinkBox>
        <Link href="/privacy">PrivacyPolicy</Link>
        <Link href="/faq">FAQ</Link>
      </S.LinkBox>
      <S.SocialBox>
        {FOOTER_ICON_LIST.map(({ image, url, alt }) => (
          <Icon key={alt} url={url} image={image} alt={alt} />
        ))}
      </S.SocialBox>
    </S.Container>
  );
};

export default Footer;
