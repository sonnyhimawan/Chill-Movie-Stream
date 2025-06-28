import { FC } from "react";
import { ButtonProps } from "../../../types/Button.type";
import GoogleIcon from "/public/assets/icon/google.svg";


const BtnTertiaryWithicon: FC<ButtonProps> = ({ label, type = "button", onClick, className }) => {
    return (
        <button 
            className={className}
            type={type}
            onClick={onClick}
        >

            <img src={GoogleIcon} />
            {label}
        </button>
    );
};

export default BtnTertiaryWithicon;
