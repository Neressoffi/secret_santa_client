import React, {Fragment} from 'react'
import {Link} from "react-router-dom";
import Logo from '../../assets/images/logo/logo-sigle.png';

interface Props {
    className?: string;
    src?: string
}

export const AppLogo = (props: Props) => {
    const {className = ""} = props;

    const handleResetMenu = () => {
    }

    return <Fragment>
        <div className={className}>
            <h1 className={'logo'}>Secret Santa</h1>
            {/*</Link>*/}
        </div>
    </Fragment>;
};
