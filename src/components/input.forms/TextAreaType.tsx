import * as React from "react";
import './style.css'
import InputFormInterface from "../../contract/form.input.interface";
import InputLabel from "./InputLabel";
import ErrorLabel from "./ErrorLabel";

export const TextAreaType = (props: InputFormInterface) => {
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
        className = '',
    } = props;

    return (
        <div className={`wrap-text-input-area ${containerClass}`}>
            <InputLabel htmlFor={id} label={label} isRequired={isRequired}/>
            <div className="wrap-input">
                <textarea
                    id={id}
                    placeholder={placeholder}
                    name={name}
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
export default TextAreaType;



