import { createContext, useContext, useState } from "react";
import { FolderListItem } from "../types/FolderType";
import { ChildrenProps } from "../types/commonTypes";

interface FolderListContextType {
  folderList: FolderListItem[];
  setFolderList: React.Dispatch<React.SetStateAction<FolderListItem[]>>;
}

const FolderListContext = createContext<FolderListContextType | undefined>(undefined);

export const FolderListProvider = ({ children }: ChildrenProps) => {
  const [folderList, setFolderList] = useState<FolderListItem[]>([]);
  return <FolderListContext.Provider value={{ folderList, setFolderList }}>{children}</FolderListContext.Provider>;
};

export const useFolderList = () => {
  const context = useContext(FolderListContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
