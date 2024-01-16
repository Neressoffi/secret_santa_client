import * as React from "react";
import {Fragment} from "react";
import './style.css';

export interface Props {
    text: string
}

export const ErrorAlert = (props: Props) => {
    const {text} = props;

    return (

        <Fragment>
            {text && text.length > 1 &&
                <div className="wrap-text-error">
                    <div className="wrap-error">
                        <span className="">{text}</span>
                    </div>
                </div>
            }
        </Fragment>
    )
};
export default ErrorAlert;



