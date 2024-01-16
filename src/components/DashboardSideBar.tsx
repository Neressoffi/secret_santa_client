import * as React from "react";
import '../assets/styles/DashboardSideBar.css'
import {
    AiFillCaretDown,
    AiFillPlusCircle,
    AiOutlineCaretDown,
    AiOutlineEye, AiOutlineLogout,
    AiOutlineMail,
    AiOutlineNotification, AiOutlinePlus,
    AiOutlineSearch, AiOutlineUser
} from "react-icons/ai";
import CustomAccordion from "./CustomAccordion";
import {useState} from "react";
import {AppIcon} from "./icon/AppIcon";

interface Module{
    id: number,
    icon: string,
    libelle: string,
    categories?: Array<SubModule>,
    pages?: Array<Page>,
}

interface SubModule{
    id: number,
    icon: string,
    libelle: string,
    link?: string,
    souscategories?: Array<SubModule>,
    subpages?: Array<Page>,
}

interface Page{
    id: number,
    libelle: string,
}

const modules: Array<Module> = [
    {
        id: 1,
        icon: 'U',
        libelle: 'Users',
        categories: [
            {
                id: 1,
                icon: 'BsPerson',
                libelle: 'Admins',
                link: '/dashboard/users/admins'
            },
            {
                id: 2,
                icon: 'BsBatteryCharging',
                link: '/dashboard/users/others',
                libelle: 'Other',
            }
        ]
    },
    {
        id: 2,
        icon: 'G',
        libelle: 'Groups',
        categories: [
            {
                id: 1,
                icon: 'BsApp',
                libelle: 'Conseils',
            },
            {
                id: 2,
                icon: 'BsBook',
                libelle: 'Loisirs',
            },
            {
                id: 3,
                icon: 'BsBox',
                libelle: 'Solidarity',
            },
            {
                id: 4,
                icon: 'BsPeople',
                libelle: 'Alumni',
            },
        ]
    },
    {
        id: 3,
        icon: 'S',
        libelle: 'Settings',
        categories: [
            {
                id: 1,
                icon: 'BsBattery',
                libelle: 'Roles',
            },
            {
                id: 2,
                icon: 'BsGraphUpArrow',
                libelle: 'Access',
            }
        ]
    }
]

export interface DashboardSideBarProps {
    isReduce: boolean,
    reduceSideBar: any
}
export const DashboardSideBar = (props: DashboardSideBarProps) => {
    const { isReduce, reduceSideBar} = props;
    return (
        <div
            style={{width: isReduce ? '65px' : '256px'}}
            className="wrap-sidebar"
        >
            {/*<div className="wrapper-sidebar">*/}
                <div className="sidebar-container">
                    <button
                        type="button"
                        className="action-reduce"
                        style={{width: isReduce ? 'auto' : '100%'}}
                        onClick={() => reduceSideBar()}
                    >
                        <span className='action-reduce-icon'>
                            <AppIcon name={isReduce ? "BsChevronDoubleRight" : "BsChevronDoubleLeft"}/>
                        </span>
                    </button>
                    {
                        modules.map((module, index: number) =>
                            <CustomAccordion
                                item={module}
                                key={`memu-${index}-${module.id}`}
                                isReduce={isReduce}
                            />)
                    }
                </div>
        </div>
    )
};
export default DashboardSideBar;



