/* SECTION - shared page */

export interface UserProps {
  folder: UserInfo;
}

export interface UserInfo {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SharedCardProps[];
  count: number;
}

export interface SharedCardProps {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  time?: string;
  date: string;
}

/* SECTION - Folder page */

/* NOTE - folder list */

export interface FolderItemProps {
  data: FolderItemInfo[];
}

export interface FolderItemInfo {
  id: number | null;
  created_at?: string;
  name?: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count: number;
  };
}

/* NOTE - folder Card */

export interface FolderCard {
  data: FolderCardInfo[];
}

export interface FolderCardInfo {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id: string;
  time: string;
  date: string;
}
