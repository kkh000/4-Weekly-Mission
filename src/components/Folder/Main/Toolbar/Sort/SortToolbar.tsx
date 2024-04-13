import { useState } from "react";
import { FolderListItem } from "@/src/types/FolderType";
import * as S from "@/src/components/Folder/Main/Toolbar/Sort/SortToolbarStyle";

interface Props {
  folderList: FolderListItem[];
  onChange: (folder: FolderListItem) => void;
}

const Sort = ({ folderList, onChange }: Props) => {
  const [focus, setFocus] = useState<number | null>(null);
  const handleClick = (folder: FolderListItem) => {
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
