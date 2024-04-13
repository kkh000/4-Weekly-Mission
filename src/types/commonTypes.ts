export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ButtonProps extends ChildrenProps {
  onClick?: () => void;
  onKeyDown?: () => void;
  type?: "button" | "submit";
}

export interface IconProps {
  image: string;
  id?: string;
  alt: string;
  url?: string;
  children?: React.ReactNode;
  size?: "large" | "small";
  onClick?: () => void;
}
