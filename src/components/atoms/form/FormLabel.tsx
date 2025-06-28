import { FC } from "react";
import { LabelProps } from "../../../types/Label.type";




const FormLabel:FC<LabelProps> = ({label = "Form Label", children}) => {

    return (

        <label className="text-white font-normal text-lg font-myfont">
            {label}
            {children}
        </label>
    )



}

export default FormLabel;