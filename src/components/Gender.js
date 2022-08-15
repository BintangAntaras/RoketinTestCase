const Gender = ({ gender }) => {
    if (gender == "female") return <p className="female">{gender}</p>;
    else return <p className="male">{gender}</p>;
};

export default Gender;
