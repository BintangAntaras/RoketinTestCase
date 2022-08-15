import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Nationality from "./components/Nationality";
import Gender from "./components/Gender";
import NatDashboard from "./components/NatDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faPersonRunning, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import GenderDashboard from "./components/GenderDashboard";

function App() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=25")
            .then(function (response) {
                console.log(response);
                setUserData(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {});
    }, []);

    return (
        <div className="App">
            <h1>Member Dashboard</h1>
            <section className="dashboard">
                <div className="dashboardItem">
                    <div>
                        <NatDashboard userData={userData} />
                    </div>
                    <FontAwesomeIcon icon={faFlag} className="dashboardIcon" />
                </div>
                <GenderDashboard userData={userData} />
                <div className="dashboardItem">
                    <div>
                        <p>-</p>
                        <p>Average Age</p>
                    </div>
                    <FontAwesomeIcon icon={faPersonRunning} className="dashboardIcon" />
                </div>
                <div className="dashboardItem">
                    <div>
                        <p>-</p>
                        <p>Average Membership</p>
                    </div>
                    <FontAwesomeIcon icon={faUserGroup} className="dashboardIcon" />
                </div>
            </section>
            <div>
                {userData.map((user, index) => {
                    return (
                        <Fragment key={user.cell}>
                            <table>
                                <tr className="user">
                                    <td>
                                        <img className="userImg" src={user.picture.large} alt="#" />
                                    </td>
                                    <td>
                                        <p className="userName">
                                            {user.name.first} {user.name.last}
                                        </p>
                                        <p className="userEmail">{user.email}</p>
                                    </td>
                                    <td>
                                        <p>{user.dob.age}</p>
                                    </td>
                                    <td className="userGender">
                                        <Gender gender={user.gender} />
                                    </td>
                                    <td>
                                        <Nationality nat={user.nat} />
                                    </td>
                                    <td>
                                        <p>
                                            {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.country}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
