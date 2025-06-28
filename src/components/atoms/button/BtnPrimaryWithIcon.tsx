import { FC } from "react";
import { ButtonProps } from "../../../types/Button.type";


const BtnPrimary: FC<ButtonProps> = ({ label, type = "button", onClick, icon: Icon , className, children  }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {Icon && <Icon/>}
            {label}
            {children}
        </button>
      
    );
};

export default BtnPrimary;
