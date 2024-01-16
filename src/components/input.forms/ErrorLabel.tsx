import * as React from "react";
import {Fragment} from "react";

export interface Props {
    error?: string,
    className?: string,
}

export const ErrorLabel = (props: Props) => {
    const {error = '', className = ''} = props;

    return <Fragment>
        {error && error.length > 1 &&
            <p className={`invalid-feedback d-block ${className}`}>{error}</p>
        }
    </Fragment>
};
export default ErrorLabel;



