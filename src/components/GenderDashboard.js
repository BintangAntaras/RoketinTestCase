import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
const GenderDashboard = ({ userData }) => {
    let female = 0;
    let male = 0;
    const genderCount =
        userData &&
        userData.map((user) => {
            if (user.gender === "female") female++;
            else male++;
        });
    console.log(female);
    console.log(male);
    let mostGender = "";
    let genderIcon = {};
    if (female > male) {
        mostGender = "female";
        genderIcon = { faVenus };
    } else {
        mostGender = "male";
        genderIcon = { faMars };
    }

    return (
        <div className="dashboardItem">
            <div>
                <p>{mostGender}</p>
                <p>Most Gender</p>
            </div>
            <FontAwesomeIcon icon={faMars} className="dashboardIcon" />
        </div>
    );
};

export default GenderDashboard;
