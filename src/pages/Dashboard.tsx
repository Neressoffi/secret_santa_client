import React, {useState} from 'react';
import '../assets/styles/Dashboard.css'
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import DashboardContain from "../components/DashboardContain";

interface DashboardProps {
    title?: string
    children?: any
}

const Dashboard = (props: DashboardProps) => {
    const {title = 'Dashboard', children} = props
    const [isReduce, setIsReduce] = useState<boolean>(false);
    /**
     * Méthode appellée  lorsque l'utilisateur clique pour réduire la sideBar'
     */
    const reduceSideBar = () => {
        setIsReduce(!isReduce);
    }

    return (
        <div className="wrapper-dashboard">
            <div className="dashboard-container">
                <DashboardHeader/>
                <div className="wrap-dashboard">
                    <DashboardSideBar isReduce={isReduce} reduceSideBar={reduceSideBar}/>
                    <div className="dashboard-content" style={{marginLeft: isReduce ? '65px' : '256px'}}>
                        <DashboardContain title={title} children={children}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
