import * as React from "react";
import '../assets/styles/DashboardHeader.css'
import {BiChevronDown} from "react-icons/bi";
import {BsBell, BsEnvelope, BsPerson, BsPlus, BsSearch, BsBoxArrowRight} from "react-icons/bs";
import {AppLogo} from "./icon/AppLogo";
import User from '../assets/images/Ariel.jpg';

export interface DashboardHeaderProps {

}
export const DashboardHeader = (props: DashboardHeaderProps) => {

    return (
        <div className="wrap-header">
            <div className="header-container">
                <div className="header-left">
                    <div className="wrap-logo">
                            <a href="/dashboard">
                               <AppLogo />
                            </a>
                    </div>
                </div>
                <div className="header-right">
                    <ul className="navbar-nav ms-auto d-flex align-items-center flex-row">
                        <li className=" in">
                            <form role="search" className="app-search d-none d-md-block me-3">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="form-control mt-0"
                                />
                                <a href="" className="active">
                                    <i className="fa fa-search" />
                                </a>
                            </form>
                        </li>
                        <li>
                            <a className="profile-pic" href="#">
                                <img
                                    src={User}
                                    alt="user-img"
                                    width={36}
                                    className="img-circle"
                                />
                                <span className="text-white font-medium">Ariel</span>
                            </a>
                        </li>
                    </ul>
                    <div className="header-action text-red">
                        <span className="action-icon" ><BsBoxArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default DashboardHeader;



