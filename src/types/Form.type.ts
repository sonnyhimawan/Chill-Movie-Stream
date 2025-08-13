
import { SVGProps } from "react";
export interface FormProps {

    label: string;
    id : string;
    name : string;
    placeholder : string;
    type: "password" | "date" | "text" | "email" | "file";
    value? : string;
    onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.FC<SVGProps<SVGSVGElement>>;
}