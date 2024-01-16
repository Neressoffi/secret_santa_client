import * as React from "react";
import './style.css'
import InputLabel from "./InputLabel";
import ErrorLabel from "./ErrorLabel";
import InputFormInterface from "../../contract/form.input.interface";

export const TextType = (props: InputFormInterface) => {
    const {
        id,
        placeholder,
        name,
        label,
        value,
        onChange,
        isRequired = false,
        error = '',
        containerClass = '',
        type = 'text',
        className = ''
    } = props;

    return (
        <div className={`wrap-text-input-area ${containerClass}`}>
            <InputLabel htmlFor={id} label={label} isRequired={isRequired}/>
            <div className="wrap-input">
                <input
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    autoComplete="false"
                    className={`text-input-area ${className} ${error ? 'input-area-error' : ''}`}
                    value={value}
                    onChange={onChange}
                />
                <ErrorLabel error={error}/>
            </div>
        </div>
    )
};
export default TextType;



