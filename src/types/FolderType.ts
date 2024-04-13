/* SECTION - FOLDERLIST */

export interface FolderListData {
  data: FolderListItem[];
}

export interface FolderListItem {
  id: number | null;
  name: string;
  created_at?: string;
  user_id?: number;
  favorite?: boolean;
}

export interface FolderCardData {
  data: FolderCardItem[];
}

export interface FolderCardItem {
  name: string;
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id: number;
  time: string;
  date: string;
}
