import React from "react";

interface StatsProps {
}

export const Stats = (props: StatsProps) => {
    const {

    } = props;

    return (
        <div className="wrap-stats">
            <div className="row justify-content-center mx-1">
                <div className="col-lg-3 col-md-12">
                    <div className="white-box analytics-info">
                        <h3 className="box-title">Total Users</h3>
                        <ul className="list-inline two-part d-flex align-items-center mb-0">
                            <li>
                                <div id="sparklinedash"><canvas width="67" height="30"
                                                                style={{display: 'inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                </div>
                            </li>
                            <li className="ms-auto"><span className="counter text-success">659</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="white-box analytics-info">
                        <h3 className="box-title">Total Groups</h3>
                        <ul className="list-inline two-part d-flex align-items-center mb-0">
                            <li>
                                <div id="sparklinedash2"><canvas width="67" height="30"
                                                                 style={{display: 'inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                </div>
                            </li>
                            <li className="ms-auto"><span className="counter text-purple">869</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="white-box analytics-info">
                        <h3 className="box-title">Admins</h3>
                        <ul className="list-inline two-part d-flex align-items-center mb-0">
                            <li>
                                <div id="sparklinedash3"><canvas width="67" height="30"
                                                                 style={{display: 'inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                </div>
                            </li>
                            <li className="ms-auto"><span className="counter text-warning">911</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="white-box analytics-info">
                        <h3 className="box-title">Other</h3>
                        <ul className="list-inline two-part d-flex align-items-center mb-0">
                            <li>
                                <div id="sparklinedash3"><canvas width="67" height="30"
                                                                 style={{display: 'inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                </div>
                            </li>
                            <li className="ms-auto"><span className="counter text-cyan">911</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mx-1">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="white-box">
                        <h3 className="box-title">User Yearly registered</h3>
                        <div className="d-md-flex">
                            <ul className="list-inline d-flex ms-auto">
                                <li className="ps-3">
                                    <h5><i className="fa fa-circle me-1 text-info"></i>Mac</h5>
                                </li>
                                <li className="ps-3">
                                    <h5><i className="fa fa-circle me-1 text-inverse"></i>Windows</h5>
                                </li>
                            </ul>
                        </div>
                        <div id="ct-visits" style={{height: '405px'}}>
                            <div className="chartist-tooltip" style={{top: '-17px', left: '-12px'}}><span
                                className="chartist-tooltip-value">6</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};