import { FC } from "react";
import { FormProps } from "../../../types/Form.type";
import { useState } from "react";
import FormLabel from "./FormLabel";
import EyeIcon from "/public/assets/icon/eye.svg?react";
import EyeOffIcon from "/public/assets/icon/eye-off.svg?react";
import BtnPrimary from "../button/BtnPrimaryWithIcon";





const FormInputWithicon: FC<FormProps> = ({ label, id, name, placeholder, value,type, onChange }) => {

    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = type === "password";
    const inputType = isPasswordType ? (showPassword ? "text" : "password") : type;

    return (
        <FormLabel label={label}>
            <div className="relative mt-2">
                <input
                    id={id}
                    name={name}
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="border border-secondary outline-0 focus:border-primary rounded-full px-3 py-2 w-full text-base font-normal font-myfont"
                />
              {isPasswordType && (
                    <BtnPrimary
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-3 right-3 w-5 h-5 text-gray-500"
                    >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </BtnPrimary>

              )}
            </div>
        </FormLabel>

    );


}

export default FormInputWithicon;