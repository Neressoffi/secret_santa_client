import React from "react";
import '../../assets/styles/other.css'
import useRetrieve from "../../../src/hooks/useRetrieve";
import {APP_MAIN_URL} from "../../../src/utils/constant";
import ErrorAlert from "../../components/alert/ErrorAlert";

interface UsersProps {
}

export const Others = (props: UsersProps) => {
    const {

    } = props;

    const {data: others, isLoading, error} = useRetrieve(APP_MAIN_URL+"auth/users?role=USER");

    return (
        <div className="wrap-users">
            <div className="row mx-1">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="white-box">
                        <div className="d-md-flex mb-3 justify-content-between">
                            <h3 className="box-title mb-0">All others</h3>
                            <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                                <select className="form-select shadow-none row border-top">
                                    <option>March 2021</option>
                                    <option>April 2021</option>
                                    <option>May 2021</option>
                                    <option>June 2021</option>
                                    <option>July 2021</option>
                                </select>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table no-wrap">
                                <thead>
                                <tr>
                                    <th className="border-top-0">#</th>
                                    <th className="border-top-0">Lastname</th>
                                    <th className="border-top-0">Firstname</th>
                                    <th className="border-top-0">Username</th>
                                    <th className="border-top-0">Roles</th>
                                </tr>
                                </thead>
                                <tbody>
                                { isLoading && <div>En cour de traitement ...</div> }
                                {
                                    others && others.map((other, i) => {
                                        return(
                                            <tr key={i}>
                                                <td>{other._id}</td>
                                                <td className="txt-oflo">{other.lastname}</td>
                                                <td>{other.firstname}</td>
                                                <td className="txt-oflo">{other.username}</td>
                                                <td><span className="text-success">{other.roles.toString()}</span></td>
                                            </tr>
                                        )
                                    })
                                }
                                { error && <ErrorAlert text={error.toString()} />}
                                { others && others.length <= 0  && <ErrorAlert text={"Empty content"} />}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};