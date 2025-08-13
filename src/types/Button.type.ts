import { ReactNode, SVGProps } from "react";

export interface ButtonProps {
  label?: string | ReactNode;
  type: "button" | "submit" | "reset" | "file";
  onClick?: () => void;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  className : string;
  children?: ReactNode;
}
