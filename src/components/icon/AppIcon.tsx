import React, {Fragment, FunctionComponent} from 'react'
import * as Icons from "react-icons/bs";
import * as BIIcons from "react-icons/bi";
import * as HIIcons from "react-icons/hi";
import * as AIIcons from "react-icons/ai";

interface Props {
    name: string;
    size?: number;
    color?: string;
}

export const AppIcon: FunctionComponent<Props> = (props: Props) => {
    const {name, size = 14, color} = props;
    // @ts-ignore
    const Icon = Icons[name] || BIIcons[name] || HIIcons[name] || AIIcons[name];
    if (!Icon) return <Fragment></Fragment>;

    return <Icon size={size} color={color}/>;
};
