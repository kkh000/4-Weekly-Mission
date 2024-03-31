import { useState } from "react";
import SearchLink from "./Input/SharedSearchInput";
import SharedCard from "./Card/SharedCard";
import { SharedCardProps } from "@/src/constants/types";
import * as S from "@/src/styles/SharedMainStyle";

interface Props {
  cardData: SharedCardProps[];
}

const SharedMain = ({ cardData }: Props) => {
  const [searchFilter, setSearchFilter] = useState<SharedCardProps[]>(cardData);

  return (
    <S.Container>
      <SearchLink cardData={cardData} setSearchFilter={setSearchFilter} />
      <S.Grid>
        <SharedCard cardData={searchFilter} />
      </S.Grid>
    </S.Container>
  );
};

export default SharedMain;
