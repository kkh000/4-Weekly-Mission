import { CARD_NONE_IMAGE } from "@/src/constants/image";
import { SharedCardProps } from "@/src/constants/types";
import * as S from "@/src/styles/CardStyle";

interface Props {
  cardData: SharedCardProps[];
}

const Card = ({ cardData }: Props) => {
  return (
    cardData &&
    cardData.map((link: SharedCardProps) => (
      <S.Container key={link.id} href={link.url} target="_blank" rel="noreferrer">
        <S.ImageBox>
          <S.Image src={link.imageSource ?? CARD_NONE_IMAGE} alt={String(link.id)} />
        </S.ImageBox>
        <S.TextBox>
          <S.Time>{link.time}</S.Time>
          <S.Content>{link.description}</S.Content>
          <S.Date>{link.date}</S.Date>
        </S.TextBox>
      </S.Container>
    ))
  );
};
export default Card;
