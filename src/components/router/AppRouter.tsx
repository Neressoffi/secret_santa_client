import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import {Stats} from "../wrapper/Stats";
import {Admins} from "../wrapper/Admins";
import {Others} from "../wrapper/Others";

interface AppRouterProps {

}

export const AppRouter = (props: AppRouterProps) => {
    const {

    } = props;

    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Login />} />
                {/*<Route path="register" element={<Register />} />*/}
                <Route path="/dashboard/" >
                    <Route index element={<Dashboard children={<Stats />}/>} />
                    <Route path="users/admins" element={<Dashboard title={"Dashboard / Users / Admins"} children={<Admins />}/>} />
                    <Route path="users/others" element={<Dashboard title={"Dashboard / Users / Others"} children={<Others />}/>} />
                </Route>
                {/*<Route path="*" element={<NoMatch />} />*/}
            </Routes>
        </div>
    );
};