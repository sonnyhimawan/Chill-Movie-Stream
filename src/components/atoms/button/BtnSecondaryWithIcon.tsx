import { FC } from "react";
import { ButtonProps } from "../../../types/Button.type";


const BtnSecondaryWithicon: FC<ButtonProps> = ({ label, type = "button", onClick, icon: Icon, className, }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {Icon && <Icon/>}
            {label}
        </button>
    );
};

export default BtnSecondaryWithicon;
