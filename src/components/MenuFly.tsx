import React from "react";
import '../assets/styles/MenuFly.css'

interface MenuFlyProps {
    parent: string;
    menuItems: Array<any>;
    left: string
}

export const MenuFly = (props: MenuFlyProps) => {
    const {parent, menuItems, left} = props;

    return (
        <div className="wrap-menu-items-fly">
            <ul className="menu-items-fly" style={{left: left}}>
                <span className="parent-menu-fly">{parent}</span>
                {
                    menuItems.map((menuItem: any, index: number) => (
                        <li key={index} className="menu-item-option">
                            <span className="wrap-option">{menuItem.libelle}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};