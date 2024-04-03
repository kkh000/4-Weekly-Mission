import { useState } from "react";
import { FolderItemInfo } from "@/src/types/types";
import * as S from "@/src/styles/SortToolbarStyle";

interface Props {
  folderList: FolderItemInfo[];
  onChange: (folder: FolderItemInfo) => void;
}

const Sort = ({ folderList, onChange }: Props) => {
  const [focus, setFocus] = useState<number | null>(null);
  const handleClick = (folder: FolderItemInfo) => {
    setFocus(folder.id);
    onChange(folder);
  };

  return (
    <S.Container>
      <S.SortButton $isfocused={focus === null} onClick={() => handleClick({ id: null, name: "전체" })}>
        전체
      </S.SortButton>
      {folderList &&
        folderList.map((folder) => (
          <S.SortButton
            key={folder.id}
            $isfocused={focus === folder.id}
            onClick={() => handleClick(folder)}
            value={folder.name}
          >
            {folder.name}
          </S.SortButton>
        ))}
    </S.Container>
  );
};

export default Sort;
