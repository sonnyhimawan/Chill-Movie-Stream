import { FC } from "react";
import { FormProps } from "../../../types/Form.type";
import FormLabel from "./FormLabel";





const ForminputWithouticon: FC<FormProps> = ({ label, id, name, placeholder, value,type, onChange}) => {

    return (
        <FormLabel label={label}>
            <div className="relative mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="border border-secondary outline-0 focus:border-primary rounded-full px-3 py-2 w-full text-base font-normal font-myfont"
                />
            </div>
        </FormLabel>

    );


}

export default ForminputWithouticon;