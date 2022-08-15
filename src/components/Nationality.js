const Nationality = ({ nat }) => {
    let natSrc = "https://flagcdn.com/16x12/" + nat.toLowerCase() + ".png";
    return <img src={natSrc} alt={nat} />;
};

export default Nationality;
