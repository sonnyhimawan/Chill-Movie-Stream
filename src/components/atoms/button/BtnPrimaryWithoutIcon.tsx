import { FC } from "react";
import { ButtonProps } from "../../../types/Button.type";


const BtnPrimaryWithouticon: FC<ButtonProps> = ({ label, type = "button", onClick, className }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >

            {label}
        </button>
    );
};

export default BtnPrimaryWithouticon;
