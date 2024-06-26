import React, { useState } from "react";
import { InputText } from "../../atoms";

const InputForm = ({ handler, data, icon  = <></>,text = "label", ...props }) => {
  const [colorInput, setColorInput] = useState("");
  const handleChange = () => {
    handler(data);
  };
  return (
    <>
        <label>
            {text}
        </label>
        <InputText
        handleChange={handleChange}
        color={colorInput}
        icon={icon}
        {...props}
        ></InputText> 
    </>
    
  );
};

export default InputForm;