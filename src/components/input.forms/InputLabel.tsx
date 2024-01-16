import * as React from "react";
import {Fragment} from "react";

export interface Props {
    label?: string,
    htmlFor?: string,
    className?: string,
    isRequired?: boolean,
}

export const InputLabel = (props: Props) => {
    const {label = '', isRequired = false, htmlFor = '', className = 'input-label'} = props;

    return <Fragment>
        {label && label.length > 1 &&
            <label htmlFor={htmlFor} className={className}>
                <span className='text-label'>{label}</span> {isRequired && <span className='isRequired'>*</span>}
            </label>
        }
    </Fragment>
};
export default InputLabel;



