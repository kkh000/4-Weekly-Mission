import { FolderListItem } from "./FolderType";
import { FolderItemInfo } from "./types";

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  isOpened?: boolean;
  onClose?: () => void;
}

export interface DeleteModalProps extends ModalProps {
  text: string;
}

export interface InputModalProps extends ModalProps {
  placeholder: string;
}

export interface ListModalProps extends ModalProps {
  folderList: FolderItemInfo[];
  cardList: FolderListItem[];
}

export interface ShareModalProps extends Omit<ModalProps, "children"> {
  folderName: string;
  folderId: number | null;
}
