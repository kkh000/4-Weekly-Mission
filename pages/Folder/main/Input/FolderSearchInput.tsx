import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CLOSE_BUTTON, SEARCH_ICON } from "@/src/constants/image";
import { FolderCardInfo } from "@/src/constants/types";
import * as S from "@/src/styles/SearchStyle";

interface Props {
  cardList: FolderCardInfo[];
  setSearchFilter: React.Dispatch<React.SetStateAction<FolderCardInfo[]>>;
}

const FolderSerachInput = ({ cardList, setSearchFilter }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showtitle, setShowTitle] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();

  const showSearchData = () => {
    let keyword = search.trim().replace(/\s+/g, " ");
    if (keyword.trim() !== "") {
      const filteredData = cardList.filter((card) => {
        return (
          card.url.includes(keyword) ||
          (card.title && card.title.includes(keyword)) ||
          (card.description && card.description.includes(keyword))
        );
      });
      setSearchFilter(filteredData);
      setShowMessage(true);
      setShowTitle(keyword);
      const queryString = new URLSearchParams({ search: keyword }).toString();
      router.push(`/folder?${queryString}`);
    } else {
      resetSearchData();
    }
  };
  const resetSearchData = () => {
    setSearch("");
    setShowMessage(false);
    setSearchFilter(cardList);
    router.push(`/folder`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSeacrhKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      showSearchData();
    }
    if (event.key === "Escape") {
      resetSearchData();
    }
  };

  useEffect(() => {
    setSearchFilter(cardList);
  }, [cardList, setSearchFilter]);

  return (
    <S.Container>
      <S.InputBox>
        <S.Image src={SEARCH_ICON} onClick={showSearchData} alt="search" />
        <S.Input
          placeholder="링크를 검색해 보세요"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleSeacrhKeyPress}
        />
        <S.CloseIcon src={CLOSE_BUTTON} onClick={resetSearchData} alt="close" />
      </S.InputBox>
      {showMessage && (
        <S.Title>
          <S.Bold>{showtitle}</S.Bold>으로 검색한 결과입니다.
        </S.Title>
      )}
    </S.Container>
  );
};

export default FolderSerachInput;
