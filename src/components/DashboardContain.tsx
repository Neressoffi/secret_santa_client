import * as React from "react";
import '../assets/styles/DashboardContain.css'

export interface DashboardContainProps {
    title: string,
    children?: any
}

export const DashboardContain = (props: DashboardContainProps) => {

    const {
        title,
        children
    } = props

    return (
        <div className="wrap-dshb-contain">
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">{title}</h4>
                    </div>
                </div>
            </div>
            <div className="container-fluid page-content">
                {children}
            </div>
        </div>
    )
};
export default DashboardContain;



